import Cookies from 'js-cookie';
import { getProfileInfo, logIn } from '../composables/use-api.ts';

interface loginData {
  email: string;
  password: string;
}

export async function loginRequest(data: loginData) {
  try {
    const res: any = await logIn(data);
    if (res.accessToken) {
      Cookies.set('refreshToken', res.refreshToken, { path: '/' });
      Cookies.set('accessToken', res.accessToken, { path: '/' });

      const userInfo = await getProfileInfo();

      if ('email' in userInfo) {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        window.location.href = '/Vitamin';
      }
    }

    if ('message' in res.errors[0]) {
      const errorMessageContainer = document.querySelector('.login-form__error-message');
      if (!errorMessageContainer) return;

      switch (res.errors[0].message) {
        case 'Не правильний пароль':
          errorMessageContainer.innerHTML = 'Wrong password';
          break;

        case 'Користувач не знайдений':
          errorMessageContainer.innerHTML = 'Wrong email';
          break;
        default:
          errorMessageContainer.innerHTML = 'Error, try again later';
      }
    }
  } catch (error) {
    console.error(error);
  }
}
