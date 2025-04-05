import { resetPassword } from '../composables/use-api.ts';
import { validator } from './validate-recover-form.ts';


export async function recoverRequest(data: { email: string }) {
  const container: HTMLElement | null = document.querySelector('.recover__container');


  const res: any = await resetPassword(data);

  if (res.message === 'Посилання для відновлення пароля надіслано на пошту') {
    if (container) {
      container.innerHTML = `<div class="recover__successes-massage">You have been sent an e-mail</div>`;
    }
    return
  }
  const field = `#recover-${[res.errors[0].field!]}`;
  const errorsObj = { [field]: res.errors[0].message };


  validator.showErrors(errorsObj);

}
