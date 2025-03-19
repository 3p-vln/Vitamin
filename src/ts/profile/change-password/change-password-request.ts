import { changePassword } from '../../composables/use-api.ts';
import { validation } from '../change-password/validate-change-password.ts';
import { getElement } from '../../composables/use-call-dom.ts';

interface PasswordForm {
  old_password: string;
  new_password: string;
}

export async function changePasswordRequest(data: PasswordForm) {
  const massageContainer: HTMLSpanElement | null = getElement('.change-password__message');

  const res = await changePassword(data);

  if (typeof res === 'object' && res !== null && 'errors' in res && Array.isArray(res.errors)) {
    const errorsObj = res.errors.reduce((acc: Record<string, string>, error: { field?: string; message: string }) => {
      if (error.field) {
        acc[`#${error.field}`] = error.message;
      }
      return acc;
    }, {});

    validation.showErrors(errorsObj);
  }

  setTimeout(() => {
    if (massageContainer) {
      massageContainer.classList.add('hidden');
      massageContainer.innerHTML = '';
    }
  }, 5000);
}
