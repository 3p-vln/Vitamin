import Cookies from 'js-cookie';
import { RegisterData } from '../components/interfaces.ts';
import { register } from '../composables/use-api.ts';
import apiClient from './api-client.ts';

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

export interface userInfoResponseData {
  data: userInfoRequest;
}

export async function registrationRequest(data: RegisterData) {

  const res: any = await register(data);


  if (res.message === 'Реєстрація успішна') {
    Cookies.set('refreshToken', res.user.refreshToken, { path: '/' });

    const userInfo: userInfoResponseData = await apiClient.get('/profile/info');

    if ('email' in userInfo.data) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo.data));
      window.location.href = '/Vitamin';
    }
  }

  if ('message' in res.errors[0]) {
    console.log(res.errors[0].message);
    const errorMessageContainer: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.registration-form__error-message');
    if (errorMessageContainer) {
      switch (res.errors[0].message) {
        case 'Користувач вже зареєстрований':
          errorMessageContainer.forEach((item: HTMLSpanElement) => {
            item.innerHTML = 'The user is already registered';
          });
          break;
        default:
          errorMessageContainer.forEach((item: HTMLSpanElement) => {
            item.innerHTML = 'Error, try again later';
          });
      }
    }
  }

  return;
}
