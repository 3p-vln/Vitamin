import apiClient from '../registration/api-client.ts';
import { AxiosError } from 'axios';

interface PasswordForm {
  old_password: string;
  new_password: string;
}

export async function changePasswordRequest(data: PasswordForm) {
  const massageContainer: HTMLSpanElement | null = document.querySelector('.change-password__message');
  try {
    const res = await apiClient.put('/profile/change-password', data);

    if (res.status === 200) {
      if (massageContainer) {
        massageContainer.innerHTML = '<svg>\n' + '  <use href="#check-white"></use>\n' + '</svg> Changes successfully saved';
        massageContainer.style.background = 'green';
        massageContainer.classList.toggle('hidden');
      }
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    if (!massageContainer) return;

    switch (axiosError.status) {
      case 400:
        massageContainer.innerText = 'Old password is incorrect';
        break;
      case 404:
        massageContainer.innerHTML = 'User not found';
        break;

      default:
        massageContainer.innerHTML = 'Error... Try again later';
    }
    massageContainer.style.background = 'red';
    massageContainer.classList.toggle('hidden');
  }

  setTimeout(()=>{
    if(massageContainer){
      massageContainer.classList.add('hidden')
      massageContainer.innerHTML = '';
    }

  },5000)
}
