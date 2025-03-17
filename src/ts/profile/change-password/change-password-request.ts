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

    if (!('errors' in res)) {
      if (massageContainer) {
        massageContainer.innerHTML = '<svg>\n' + '  <use href="#check-white"></use>\n' + '</svg> Changes successfully saved';
        massageContainer.style.background = 'green';
        massageContainer.classList.toggle('hidden');
      }

      if (formChangePassword instanceof HTMLFormElement) {
        formChangePassword.reset();
      }
    } else {
      const errorsObj = res.errors.reduce((acc: Record<string, string>, error) => {
        if (error.field) {
          acc[`#${error.field}`] = error.message;
        }
        return acc;
      }, {});

      validation.showErrors(errorsObj);
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
