import { AxiosError } from 'axios';
import apiClient from '../../registration/api-client.ts';
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

export async  function overviewRequest(data: FormData){
  const massageContainer: HTMLSpanElement | null = document.querySelector('.overview__message');

  try {
    const res = await  apiClient.put('/profile/update-profile', data)
    if (res.status === 200) {
      if (massageContainer) {
        massageContainer.innerHTML = '<svg>\n' + '  <use href="#check-white"></use>\n' + '</svg> Changes successfully saved';
        massageContainer.style.background = 'green';
        massageContainer.classList.toggle('hidden');
      }
    }

  }catch (error){
    const axiosError = error as AxiosError;
    if (massageContainer) {
      switch (axiosError.status) {
        case 401:
          massageContainer.innerText = 'You are not authorized';
          break;
        case 400:
          massageContainer.innerHTML = 'Incorrect data';
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
  }

  setTimeout(() => {
    if (massageContainer) {
      massageContainer.classList.add('hidden');
      massageContainer.innerHTML = '';
    }
  }, 5000);
}