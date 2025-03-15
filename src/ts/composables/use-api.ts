import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

import {
  CardInfoData,
  LogInData,
  OrderData, OrdersData,
  PasswordData,
  ProdResponse, Product,
  ProfileUpdateData,
  RefreshTokenData,
  RegisterData,
  ResetPasswordData,
  SetNewPasswordData, UserInfo, UserNotFoundInfo,
} from '../components/interfaces';

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const REFRESH_URL = 'https://www.mku-journal.online/auth/refresh-token';

const apiClient = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Функция-обертка для обработки ошибок
const handleRequest = async <T>(request: Promise<{ data: T }>): Promise<T | { errors: { message: string }[] }> => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('API error:', error.response?.data || error.message);
      return { errors: [{ message: error.response?.data?.message || error.message }] };
    }
    console.error('Unknown error:', error);
    return { errors: [{ message: 'An unexpected error occurred.' }] };
  }
};

// Auth
export const logIn = (data: LogInData) => handleRequest<LogInData>(axios.post('https://www.mku-journal.online/auth/login', data));
export const register = (data: RegisterData) => handleRequest<RegisterData>(axios.post('https://www.mku-journal.online/auth/register', data));
export const resetPassword = (data: ResetPasswordData) => handleRequest<ResetPasswordData>(axios.post('https://www.mku-journal.online/auth/reset-password', data));
export const checkResetToken = (token: string) => handleRequest<AxiosResponse>(axios.get(`https://www.mku-journal.online/auth/check-reset-token?token=${token}`));
export const setNewPassword = (data: SetNewPasswordData) => handleRequest<SetNewPasswordData>(axios.post('https://www.mku-journal.online/auth/set-new-password', data));
export const refreshToken = (data: RefreshTokenData) => handleRequest(axios.post(REFRESH_URL, data));

// Catalog
export const getCatalogList = (page: number, limit: number, type?: string) => handleRequest<ProdResponse>(
  axios.get('https://www.mku-journal.online/catalog/all-list', { params: { type, page, limit } })
);
export const getCatalogItem = (id: string) => handleRequest<Product>(axios.get(`https://www.mku-journal.online/catalog/${id}/info`));
export const createOrder = (data: OrderData) => handleRequest(axios.post('https://www.mku-journal.online/catalog/create-order', data));
export const getRecommendations = (isMain: boolean) => handleRequest<ProdResponse>(
  axios.get(`https://www.mku-journal.online/catalog/recommendations${isMain ? '?is_main=true' : ''}`)
);

// Profile
export const getProfileInfo = () => handleRequest<UserInfo | UserNotFoundInfo>(apiClient.get('https://www.mku-journal.online/profile/info'));
export const getOrderHistory = () => handleRequest<OrdersData>(apiClient.get('https://www.mku-journal.online/profile/order-history'));
export const updateProfile = (data: ProfileUpdateData) => handleRequest<ProfileUpdateData>(apiClient.put('https://www.mku-journal.online/profile/update-profile', data));
export const updateCardInfo = (data: CardInfoData) => handleRequest<CardInfoData>(apiClient.put('https://www.mku-journal.online/profile/update-card-info', data));
export const changePassword = (data: PasswordData) => handleRequest<PasswordData>(apiClient.put('https://www.mku-journal.online/profile/change-password', data));

// Работа с токенами
const getAccessToken = (): string | null => Cookies.get(ACCESS_TOKEN_KEY) || null;
const getRefreshToken = (): string | null => Cookies.get(REFRESH_TOKEN_KEY) || null;
const setTokens = (accessToken: string, refreshToken: string): void => {
  Cookies.set(ACCESS_TOKEN_KEY, accessToken, { path: '/' });
  Cookies.set(REFRESH_TOKEN_KEY, refreshToken, { path: '/', expires: 1 });
};
const clearAuthData = (): void => {
  Cookies.remove(ACCESS_TOKEN_KEY, { path: '/' });
  Cookies.remove(REFRESH_TOKEN_KEY, { path: '/' });
  localStorage.removeItem('userInfo');
  window.location.href = '/Vitamin/login.html';
};

// Перехватчик запросов
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (token && config.headers) {
    config.headers.authorization = `${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

// Логика обновления токена
let isRefreshing = false;
const refreshSubscribers: ((token: string) => void)[] = [];
const subscribeTokenRefresh = (cb: (token: string) => void) => refreshSubscribers.push(cb);
const onRefreshed = (token: string) => {
  refreshSubscribers.forEach(cb => cb(token));
  refreshSubscribers.splice(0, refreshSubscribers.length);
};

// Перехватчик ответов
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(resolve => {
          subscribeTokenRefresh((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.authorization = `${token}`;
            }
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = getRefreshToken();
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        const { data } = await axios.post<{ accessToken: string; refreshToken: string }>(REFRESH_URL, {
          [REFRESH_TOKEN_KEY]: refreshToken,
        });
        setTokens(data.accessToken, data.refreshToken);
        onRefreshed(data.accessToken);

        if (originalRequest.headers) {
          originalRequest.headers.authorization = `${data.accessToken}`;
        }
        return apiClient(originalRequest);
      } catch (refreshError) {
        clearAuthData();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
