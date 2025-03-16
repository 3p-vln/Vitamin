
import { changePassword } from '../../composables/use-api.ts';
import { validation } from '../change-password/validate-change-password.ts';


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

      const errorsObj = res.errors.reduce((acc: any, error) => {
        acc[`#${error.field}`] = error.message;
        return acc;
      }, {});

      validation.showErrors(errorsObj);
  }

  setTimeout(()=>{
    if(massageContainer){
      massageContainer.classList.add('hidden')
      massageContainer.innerHTML = '';
    }

  },5000)
}