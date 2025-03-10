import { setNewPassword } from '../composables/use-api.ts';

export async function setPasswordRequest(data: { resetToken: string; newPassword: string }) {
  const messageContainer: HTMLElement | null = document.querySelector('.recover__message');
  const form: HTMLElement | null = document.querySelector('.recover__form_new-password');

  const res = await setNewPassword(data);

  if (!("errors" in res)) {
    if (messageContainer && form) {
      form.remove();
      messageContainer.innerHTML = `The password was successfully changed  <a class="recover__link-login" href="/Vitamin/login.html"> Back to login</a>`;
      messageContainer.classList.remove('recover__message_hidden');
      messageContainer.style.color = 'green';
    }
  } else {
    if (messageContainer) {
      messageContainer.innerHTML = `Oops. Error, the password has not been changed. Try again later.<a class="recover__link-login" href="/Vitamin/login.html"> Back to login</a>`;
      messageContainer.classList.remove('recover__message_hidden');
      messageContainer.style.color = 'red';
    }
  }
}
