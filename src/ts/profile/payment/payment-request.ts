import { updateCardInfo } from '../../composables/use-api.ts';

interface paymentData {
  card_number: string;
  card_cvv: string;
  card_date: string;
}

export async function paymentRequest(data: paymentData) {
  const massageContainer: HTMLSpanElement | null = document.querySelector('.payment-methods__message');
  const form = document.getElementById('payment-methods-form');

  const res = await updateCardInfo(data);
  if (!('errors' in res)) {
    if (massageContainer) {
      massageContainer.innerHTML = '<svg>\n' + '  <use href="#check-white"></use>\n' + '</svg> Changes successfully saved';
      massageContainer.style.background = 'green';
      massageContainer.classList.toggle('hidden');
    }
    if (form instanceof HTMLFormElement) {
      // form.reset();

    }
  } else {
    if (!massageContainer) return;

    switch (res.errors[0].message) {
      case 'Access token required':
        massageContainer.innerText = 'You are not authorized';
        break;
      case 'Неверный номер карты':
        massageContainer.innerHTML = 'Incorrect card number';
        break;
      case 'Профіль не знайдено':
        massageContainer.innerHTML = 'Profile not found';
        break;

      default:
        massageContainer.innerHTML = 'Error... Try again later';
    }
    massageContainer.style.background = 'red';
    massageContainer.classList.toggle('hidden');
  }
  setTimeout(() => {
    if (massageContainer) {
      massageContainer.classList.add('hidden');
      massageContainer.innerHTML = '';
    }
  }, 5000);
}
