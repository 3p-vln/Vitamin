import apiClient from '../registration/api-client.ts';
import { AxiosError } from 'axios';
export async function recoverRequest(data: { email: string }) {
  const container: HTMLElement | null = document.querySelector('.recover__container');
  const errormessageContainer: HTMLElement | null = document.querySelector('.recover__error-message');

  try {
    const res: any = await apiClient.post('/auth/reset-password', data);

    if (res.status === 200) {
      console.log(res);
      if (container) {
        container.innerHTML = `<div class="recover__successes-massage">You have been sent an e-mail</div>`;
      }
    }
  } catch (error) {

    const axiosError = error as AxiosError<{ message: string }>;

    if (errormessageContainer) {

      if (axiosError.response && axiosError.response.data) {
        if (axiosError.response.data.message === 'Користувач не знайдений') {
          errormessageContainer.innerText = 'User not found';
        } else {
          errormessageContainer.innerText = 'Something went wrong... Try again later.';
        }
      } else {
        errormessageContainer.innerText = 'Something went wrong... Try again later.';
      }
    }
  }
}
