import { changePassword } from '../../composables/use-api.ts';
import { validation } from '../change-password/validate-change-password.ts';

interface PasswordForm {
  old_password: string;
  new_password: string;
}

export async function changePasswordRequest(data: PasswordForm) {
  const massageContainer: HTMLSpanElement | null = document.querySelector('.change-password__message');
  const formChangePassword = document.getElementById('change-password');

  try {
    const res = await changePassword(data);

    if (typeof res === 'object' && res !== null && 'errors' in res && Array.isArray(res.errors)) {
      const errorsObj = res.errors.reduce((acc: Record<string, string>, error: { field?: string; message: string }) => {
        if (error.field) {
          acc[`#${error.field}`] = error.message;
        }
        return acc;
      }, {});

      validation.showErrors(errorsObj);
    } else {
      if (massageContainer) {
        massageContainer.innerHTML = `
          <svg>
            <use href="#check-white"></use>
          </svg> Changes successfully saved
        `;
        massageContainer.style.background = 'green';
        massageContainer.classList.toggle('hidden');
      }

      if (formChangePassword instanceof HTMLFormElement) {
        formChangePassword.reset();
      }
    }
  } catch (error) {
    console.error('Ошибка при изменении пароля:', error);
    validation.showErrors({ general: 'Something went wrong. Please try again.' });
  }

  setTimeout(() => {
    if (massageContainer) {
      massageContainer.classList.add('hidden');
      massageContainer.innerHTML = '';
    }
  }, 5000);
}
