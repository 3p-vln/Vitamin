import { checkResetToken } from '../composables/use-api.ts';

export async function resetPassword() {
  const url = new URL(window.location.href);
  const messageContainer: HTMLElement | null = document.querySelector('.recover__message');
  const customLoader: HTMLElement | null = document.querySelector('.custom-loader');
  const formNewPassword: HTMLElement | null = document.getElementById('reset-password-form');
  // Извлекаем параметр 'reset'
  const token = url.searchParams.get('reset');

  if (token && messageContainer && customLoader && formNewPassword) {
    const res = await checkResetToken(token);

    if ('email' in res) {

      customLoader.style.display = 'none';
      formNewPassword.style.display = 'block';
    } else {
      window.location.href = '/Vitamin';

    }
  }
}
