import Cookies from 'js-cookie';
import  { getProfileInfo, logIn } from '../composables/use-api.ts';
import { getElement } from '../composables/use-call-dom.ts';



export interface LoginData {
  email: string;
  password: string;
}

export async function loginRequest(data: LoginData) {
  const res: any = await logIn(data);
  console.log(data);
  console.log(0);
  if (res.accessToken) {
    Cookies.set('refreshToken', res.refreshToken, { path: '/' });
    Cookies.set('accessToken', res.accessToken, { path: '/' });

    const userInfo= await getProfileInfo();

    if ('email' in userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      window.location.href = '/Vitamin';
    }
  }

  if ('message' in res.errors[0]) {
    console.log(1);
    const errorMessageContainer = getElement<HTMLElement>('.login-form__error-message');

    if (!errorMessageContainer) return;
    console.log(2);

    switch (res.errors[0].message) {

      case 'Не правильний пароль':
        errorMessageContainer.innerHTML = 'Wrong password';
        console.log(3);
        break;

      case 'Користувач не знайдений':
        errorMessageContainer.innerHTML = 'Wrong email';
        console.log(4);
        break;
      default:
        errorMessageContainer.innerHTML = 'Error, try again later';
    }
  }
}
