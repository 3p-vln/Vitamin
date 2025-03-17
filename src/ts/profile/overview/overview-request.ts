import { updateProfile } from '../../composables/use-api.ts';
import { validation } from './overview-validete.ts';

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
  const massageContainer: HTMLSpanElement | null = document.querySelector('.overview__message');

  const res = await updateProfile(data);
  if (!('errors' in res)) {
    if (massageContainer) {
      massageContainer.innerHTML = '<svg>\n' + '  <use href="#check-white"></use>\n' + '</svg> Changes successfully saved';
      massageContainer.style.background = 'green';
      massageContainer.classList.toggle('hidden');
    }
  } else {
    const errorsObj = res.errors.reduce((acc: any, error) => {
      acc[`#${error.field}`] = error.message;
      return acc;
    }, {});

    validation.showErrors(errorsObj);
  }

  setTimeout(() => {
    if (massageContainer) {
      massageContainer.classList.add('hidden');
      massageContainer.innerHTML = '';
    }
  }, 5000);
}
