import { updateProfile } from '../../composables/use-api.ts';
import { validation } from './overview-validete.ts';
import { getElement } from '../../composables/use-call-dom.ts';

interface FormData {
  first_name: string;
  last_name: string;
  address_one: string;
  address_two: string;
  city: string;
  state_province: string;
  postal_code: string;
  email: string;
  phone: string;
}

export async function overviewRequest(data: FormData) {
  const massageContainer: HTMLSpanElement | null = getElement('.overview__message');

  try {
    const res = await updateProfile(data);

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
    }
  } catch (error) {
    console.error('Ошибка при обновлении профиля:', error);
    validation.showErrors({ general: 'Something went wrong. Please try again.' });
  }

  setTimeout(() => {
    if (massageContainer) {
      massageContainer.classList.add('hidden');
      massageContainer.innerHTML = '';
    }
  }, 5000);
}
