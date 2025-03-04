import apiClient from '../../registration/api-client.ts';
import { AxiosError } from 'axios';

interface paymentData {
  card_number: string;
  card_cvv: string;
  card_date: string;
}

export async function paymentRequest(data: paymentData) {
  const massageContainer: HTMLSpanElement | null = document.querySelector('.payment-methods__message');
  const form = document.getElementById('payment-methods-form');
  try {
    const res = await apiClient.put('/profile/update-card-info', data);
    if (res.status === 200) {
      if (massageContainer) {
        massageContainer.innerHTML = '<svg>\n' + '  <use href="#check-white"></use>\n' + '</svg> Changes successfully saved';
        massageContainer.style.background = 'green';
        massageContainer.classList.toggle('hidden');
      }
      if (form instanceof HTMLFormElement) {
        form.reset();
      }
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    if (!massageContainer) return;

    switch (axiosError.status) {
      case 401:
        massageContainer.innerText = 'You are not authorized';
        break;
      case 400:
        massageContainer.innerHTML = 'Incorrect card number';
        break;
      case 404:
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
