import axios, { AxiosError } from 'axios';

const API_BASE_URL = 'https://www.mku-journal.online';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function for error handling
const handleRequest = async <T>(request: Promise<{ data: T }>): Promise<T | { errors: { message: string }[] }> => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('API error:', error.response?.data || error.message);
      return { errors: [{ message: error.response?.data?.message || error.message }] };
    }
    if (error instanceof Error) {
      console.error('General error:', error.message);
      return { errors: [{ message: error.message }] };
    }

    console.error('Unknown error:', error);
    return { errors: [{ message: 'An unexpected error occurred.' }] };
  }
};

// Interfaces
interface LogInData {
  email: string;
  password: string;
}

interface RegisterData extends LogInData {
  first_name: string;
  last_name: string;
  role_type: string;
}

interface RefreshTokenData {
  refreshToken: string;
}

interface ResetPasswordData {
  email: string;
}

interface SetNewPasswordData {
  resetToken: string;
  newPassword: string;
}

interface OrderData {
  order: [
    {
      product_id: number;
      quantity: number;
    },
  ];
  user_id: string;
}

interface ProfileUpdateData {
  email: string;
  first_name: string;
  last_name: string;
  address_one: string;
  address_two: string;
  city: string;
  phone: string;
  postal_code: string;
  state_province: string;
}

interface CardInfoData {
  card_number: string;
  card_cvv: string;
  card_date: string;
}

interface PasswordData {
  old_password: string;
  new_password: string;
}

// Auth
export const register = (data: RegisterData) => handleRequest(api.post('/auth/register', data));
export const logIn = (data: LogInData) => handleRequest(api.post('/auth/login', data));
export const refreshToken = (data: RefreshTokenData) => handleRequest(api.post('/auth/refresh-token', data));
export const resetPassword = (data: ResetPasswordData) => handleRequest(api.post('/auth/reset-password', data));
export const checkResetToken = (token: string) => handleRequest(api.get(`/auth/check-reset-token?token=${token}`));
export const setNewPassword = (data: SetNewPasswordData) => handleRequest(api.post('/auth/set-new-password', data));

//Catalog
export const getCatalogList = (page: number, limit: number, type?: string) => handleRequest(api.get('/catalog/all-list', { params: { type, page, limit } }));
export const getCatalogItem = (id: string) => handleRequest(api.get(`/catalog/${id}/info`));
export const createOrder = (data: OrderData) => handleRequest(api.post('/catalog/create-order', data));
export const getRecommendations = (isMain: boolean) => handleRequest(api.get(`${isMain ? '/catalog/recommendations?is_main=true' : '/catalog/recommendations'}`));

//Profile
export const getProfileInfo = () => handleRequest(api.get('/profile/info'));
export const getOrderHistory = () => handleRequest(api.get('/profile/order-history'));
export const updateProfile = (data: ProfileUpdateData) => handleRequest(api.put('/profile/update-profile', data));
export const updateCardInfo = (data: CardInfoData) => handleRequest(api.put('/profile/update-card-info', data));
export const changePassword = (data: PasswordData) => handleRequest(api.put('/profile/change-password', data));
