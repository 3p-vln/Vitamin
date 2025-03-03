import apiClient from '../registration/api-client.ts';
import { AxiosResponse } from 'axios';

export async function setPasswordRequest(data: { resetToken: string; newPassword: string }) {
  const messageContainer: HTMLElement | null = document.querySelector('.recover__message');
  const form: HTMLElement | null = document.querySelector('.recover__form_new-password');
  try {
    const res = await apiClient.post(`/auth/set-new-password`, data);
    console.log(res);
    if (res.status === 200) {
      if (messageContainer && form) {
        form.remove()
        messageContainer.innerHTML = `The password was successfully changed  <a class="recover__link-login" href="/Vitamin/login.html"> Back to login</a>`;
        messageContainer.classList.remove('recover__message_hidden');
        messageContainer.style.color = 'green'
      }
    }
  } catch (error) {
    const errorAxios = error as AxiosResponse;

    switch (errorAxios.status) {
      case 400:
        if (messageContainer){
          messageContainer.innerHTML = `Oops. Error, the password has not been changed. Try again later.<a class="recover__link-login" href="/Vitamin/login.html"> Back to login</a>`;
          messageContainer.classList.remove('recover__message_hidden');
          messageContainer.style.color = 'red'

        }
    }
  }
}
