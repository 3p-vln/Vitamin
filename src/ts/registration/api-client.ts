import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = 'https://www.mku-journal.online';
const ACCESS_TOKEN_KEY = 'accessToken'; // Ключ для хранения accessToken в куках
const REFRESH_URL = '/auth/refresh';

// Создаём экземпляр axios
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Позволяет передавать куки (accessToken и refreshToken хранятся в куках)
});

// Функция получения accessToken из куков
const getAccessToken = (): string | null => {
  return Cookies.get(ACCESS_TOKEN_KEY) || null;
};

// Функция сохранения accessToken в куки
const setAccessToken = (token: string): void => {
  Cookies.set(ACCESS_TOKEN_KEY, token, { secure: true, sameSite: 'strict', path: '/' });
};

// Очистка accessToken при выходе из системы или истечении refreshToken
const clearAuthData = (): void => {
  Cookies.remove(ACCESS_TOKEN_KEY, { path: '/' });
};

// Перехватчик запросов
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

// Флаг для предотвращения множественных запросов на refresh
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const subscribeTokenRefresh = (cb: (token: string) => void) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach(cb => cb(token));
  refreshSubscribers = [];
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
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { data } = await apiClient.post<{ accessToken: string }>(REFRESH_URL);
        setAccessToken(data.accessToken);
        onRefreshed(data.accessToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        }
        return apiClient(originalRequest);
      } catch (refreshError) {
        clearAuthData(); // Очистка данных, если refreshToken невалиден
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;