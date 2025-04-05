import Cookies from 'js-cookie';
import { RegisterData } from '../../typings/interfaces.ts';
import { getProfileInfo, register } from '../composables/use-api.ts';
import { validator } from './validate-registration-form-regular.ts';

export async function registrationRequest(data: RegisterData) {
  const res: any = await register(data);

  if (!('errors' in res)) {
    Cookies.set('refreshToken', res.user.refreshToken, { path: '/' });

    const userInfo = await getProfileInfo();

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    window.location.href = '/Vitamin';

    return;
  }

  const field = `#regular-registration-${[res.errors[0].field!]}`;
  const errorsObj = { [field]: res.errors[0].message };
  console.log(field);

  validator.showErrors(errorsObj);


  // const errorMessageContainer: NodeListOf<HTMLSpanElement> = getElements('.registration-form__error-message');

  // if (errorMessageContainer) {
  //   switch (res.errors[0].message) {
  //     case 'Користувач вже зареєстрований':
  //       errorMessageContainer.forEach((item: HTMLSpanElement) => {
  //         item.innerHTML = 'The user is already registered';
  //       });
  //       break;
  //     default:
  //       errorMessageContainer.forEach((item: HTMLSpanElement) => {
  //         item.innerHTML = 'Error, try again later';
  //       });
  //   }
  // }

  return;
}
