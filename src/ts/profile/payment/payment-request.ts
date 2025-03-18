import { updateCardInfo } from '../../composables/use-api.ts';
import { validate } from './validate-card.ts';

interface paymentData {
  card_number: string;
  card_cvv: string;
  card_date: string;
}

export async function paymentRequest(data: paymentData) {
  const form: HTMLFormElement | null = document.querySelector('#payment-methods-form');
  const massageContainer: HTMLSpanElement | null = document.querySelector('.payment-methods__message');

  try {
    const res = await updateCardInfo(data);

    if (typeof res === 'object' && res !== null && 'errors' in res && Array.isArray(res.errors)) {
      const errorsObj = res.errors.reduce((acc: Record<string, string>, error: { field?: string; message: string }) => {
        if (error.field) {
          acc[`#${error.field}`] = error.message;
        }
        return acc;
      }, {});

      validate.showErrors(errorsObj);
    } else {
      if (massageContainer) {
        massageContainer.innerHTML = `
          <svg>
            <use href="#check-white"></use>
          </svg> Changes successfully saved
        `;
        massageContainer.style.background = 'green';
        massageContainer.classList.remove('hidden');
      }

      if (form) {
        // form.reset();
      }
    }
  } catch (error) {
    console.error('Ошибка при обновлении платежной информации:', error);
    validate.showErrors({ general: 'Something went wrong. Please try again.' });
  }
}
