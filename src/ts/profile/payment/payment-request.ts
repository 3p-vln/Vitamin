import {  updateCardInfo } from '../../composables/use-api.ts';
import { validate } from './validate-card.ts';



interface paymentData {
  card_number: string;
  card_cvv: string;
  card_date: string;
}




export async function paymentRequest(data: paymentData) {

  const form: HTMLFormElement = document.querySelector('#payment-methods-form') as HTMLFormElement;


  const massageContainer: HTMLSpanElement | null = document.querySelector('.payment-methods__message');

  const res = await updateCardInfo(data);
  if (!('errors' in res)) {
    // Успешный случай
    if (massageContainer) {
      massageContainer.innerHTML = '<svg>\n' + '  <use href="#check-white"></use>\n' + '</svg> Changes successfully saved';
      massageContainer.style.background = 'green';
      massageContainer.classList.remove('hidden');
    }
    if (form instanceof HTMLFormElement) {
      // form.reset(); // Раскомментируйте, если нужно сбрасывать форму
    }
  } else {
    // Обработка ошибок
    if (!massageContainer) return;

    // Преобразуем массив ошибок в объект для JustValidate
    const errorsObj = res.errors.reduce((acc: any, error) => {
      acc[`#${error.field}`] = error.message;
      return acc;
    }, {});
    validate.showErrors(errorsObj);


  }
}
    // Опционально: показываем общее сообщение об ошибке
    // massageContainer.innerHTML = 'Пожалуйста, исправьте ошибки в форме.';
    // massageContainer.style.background = 'red';
    // massageContainer.classList.remove('hidden');


  // setTimeout(() => {
  //   if (massageContainer) {
  //     massageContainer.classList.add('hidden');
  //     massageContainer.innerHTML = '';
  //   }
  // }, 5000);





// switch (res.errors[0].message) {
//   case 'Access token required':
//     massageContainer.innerText = 'You are not authorized';
//     break;
//   case 'Неверный номер карты':
//     massageContainer.innerHTML = 'Incorrect card number';
//     break;
//   case 'Профіль не знайдено':
//     massageContainer.innerHTML = 'Profile not found';
//     break;
//
//   default:
//     massageContainer.innerHTML = 'Error... Try again later';
// }
//
//
// massageContainer.style.background = 'red';
// massageContainer.classList.toggle('hidden');