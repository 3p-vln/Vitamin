import { updateCardInfo } from '../../composables/use-api.ts';
import { validate } from './validate-card.ts';
import { getElement } from '../../composables/use-call-dom.ts';
import { paymentData } from '../../../typings/interfaces.ts';

export async function paymentRequest(data: paymentData) {
  const massageContainer: HTMLSpanElement | null = getElement('.payment-methods__message');

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
    }
  } catch (error) {
    console.error('Ошибка при обновлении платежной информации:', error);
    validate.showErrors({ general: 'Something went wrong. Please try again.' });
  }
}
