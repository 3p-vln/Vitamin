import Cookies from 'js-cookie';
import { getProfileInfo, logIn } from '../composables/use-api.ts';
import { getElement } from '../composables/use-call-dom.ts';
import {validator} from './validate-login-form.ts'


export interface LoginData {
  email: string;
  password: string;
}

export async function loginRequest(data: LoginData) {
  const res: any = await logIn(data);

  if (res.accessToken) {
    Cookies.set('refreshToken', res.refreshToken, { path: '/' });
    Cookies.set('accessToken', res.accessToken, { path: '/' });

    const userInfo = await getProfileInfo();

    if ('email' in userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      window.location.href = '/Vitamin';
    }
    return
  }


    const errorMessageContainer = getElement<HTMLElement>('.login-form__error-message');

    if (!errorMessageContainer) return;

    const field = `#login-${[res.errors[0].field!]}`;
    const errorsObj = { [field]: res.errors[0].message };

    validator.showErrors(errorsObj);


    // switch (res.errors[0].message) {
    //   case 'Не правильний пароль':
    //     errorMessageContainer.innerHTML = 'Wrong password';
    //     break;
    //
    //   case 'Користувач не знайдений':
    //     errorMessageContainer.innerHTML = 'Wrong email';
    //     break;
    //   default:
    //     errorMessageContainer.innerHTML = 'Error, try again later';
    // }

}
