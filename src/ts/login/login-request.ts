import apiClient from '../registration/api-client.ts';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';
import { userInfoResponseData } from '../registration/registration-request.ts';

interface loginData {
  email: string;
  password: string;
}

export async function loginRequest(data: loginData) {
  try {
    const res: any = await apiClient.post('/auth/login', data);
    res.status;
    if (res.status === 200) {
      Cookies.set('refreshToken', res.data.refreshToken, { path: '/' });
      Cookies.set('accessToken', res.data.accessToken, { path: '/' });
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        const errorMessageContainer = document.querySelector('.login-form__error-message');

        if (errorMessageContainer) {
          if (error.response.data.message === 'Не правильний пароль') {
            errorMessageContainer.innerHTML = 'Wrong password';
          } else if (error.response.data.message === 'Користувач не знайдений') {
            errorMessageContainer.innerHTML = 'Wrong email';
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
