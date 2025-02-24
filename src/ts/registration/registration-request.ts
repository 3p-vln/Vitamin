import Cookies from 'js-cookie';
import apiClient from './api-client.ts';
import { AxiosError } from 'axios';
import { RegisterData } from '../components/interfaces.ts';

interface userNotFoundInfo {
  message: string;
  error: string;
}

interface userInfo {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

type userInfoRequest = userNotFoundInfo | userInfo;

interface userInfoResponseData {
  data: userInfoRequest;
}

export async function registrationRequest(data: RegisterData) {
  try {
    // const res: any = await register(data);
    const res: any = await apiClient.post('/auth/register', data);

    if (res.status === 201) {
      Cookies.set('refreshToken', res.data.user.refreshToken, { path: '/' });
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        const errorMessageContainer = document.querySelector('.registration-form__regular-error-message');

        if (errorMessageContainer) {
          if (error.response.data.message === 'Користувач вже зареєстрований') {
            errorMessageContainer.innerHTML = 'The user is already registered';
          } else {
            errorMessageContainer.innerHTML = 'Error, try again later';
          }
        }
      }
    }
    return;
  }

  const userInfo: userInfoResponseData = await apiClient.get('/profile/info');

  if ('email' in userInfo.data) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo.data));
    window.location.href = '/Vitamin';
  }
}
