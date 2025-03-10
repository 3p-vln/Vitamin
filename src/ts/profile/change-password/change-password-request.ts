
import { changePassword } from '../../composables/use-api.ts';

interface PasswordForm {
  old_password: string;
  new_password: string;
}

export async function changePasswordRequest(data: PasswordForm) {
  const massageContainer: HTMLSpanElement | null = document.querySelector('.change-password__message');
  const formChangePassword= document.getElementById('change-password');

    const res = await changePassword( data);

    if (!('errors' in res)) {
      if (massageContainer) {
        massageContainer.innerHTML = '<svg>\n' + '  <use href="#check-white"></use>\n' + '</svg> Changes successfully saved';
        massageContainer.style.background = 'green';
        massageContainer.classList.toggle('hidden');
      }
      if(formChangePassword instanceof HTMLFormElement) {
        formChangePassword.reset()
      }
    }else{

      if (!massageContainer) return;

      switch (res.errors[0].message) {
        case 'Old password is incorrect':
          massageContainer.innerText = 'Old password is incorrect';
          break;
        case 'User not found':
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