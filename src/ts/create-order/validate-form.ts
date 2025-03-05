import JustValidate from 'just-validate';
import { getElement } from '../composables/use-call-dom.ts';
// import IMask from 'imask';

export function validateDeliveryForm(): Promise<boolean> {
  return new Promise((resolve) => {
    const form = getElement('#deliver-info') as HTMLFormElement;

    if (!form) {
      resolve(false);
      return;
    }

    const validator = new JustValidate(form, {
      focusInvalidField: true,
      lockForm: true,
      validateBeforeSubmitting: true,
    });

    validator
      .addField('#first-name', [
        {
          rule: 'required',
          errorMessage: 'This field is required',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Must be at least 2 characters',
        },
        {
          rule: 'maxLength',
          value: 50,
          errorMessage: 'Must be less than 50 characters',
        },
        {
          rule: 'customRegexp',
          value: /^[\p{L}]+$/u,
          errorMessage: 'Only letters are allowed',
        },
      ])
      .addField('#last-name', [
        {
          rule: 'required',
          errorMessage: 'This field is required',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Must be at least 2 characters',
        },
        {
          rule: 'maxLength',
          value: 50,
          errorMessage: 'Must be less than 50 characters',
        },
        {
          rule: 'customRegexp',
          value: /^[\p{L}]+$/u,
          errorMessage: 'Only letters are allowed',
        },
      ])
      .addField('#address-line1', [
        {
          rule: 'required',
          errorMessage: 'This field is required',
        },
        {
          rule: 'minLength',
          value: 5,
          errorMessage: 'Must be at least 5 characters',
        },
        {
          rule: 'maxLength',
          value: 50,
          errorMessage: 'Must be less than 50 characters',
        },
        {
          rule: 'customRegexp',
          value: /^[\p{L}.,\s]+$/u,
          errorMessage: 'Write correct address',
        },
      ])
      .addField('#address-line2', [
        {
          rule: 'minLength',
          value: 5,
          errorMessage: 'Must be at least 5 characters',
        },
        {
          rule: 'maxLength',
          value: 50,
          errorMessage: 'Must be less than 50 characters',
        },
        {
          rule: 'customRegexp',
          value: /^[\p{L}.,\s]+$/u,
          errorMessage: 'Write correct address',
        },
      ])
      .addField('#city', [
        {
          rule: 'required',
          errorMessage: 'This field is required',
        },
        {
          rule: 'minLength',
          value: 5,
          errorMessage: 'Must be at least 5 characters',
        },
        {
          rule: 'maxLength',
          value: 50,
          errorMessage: 'Must be less than 50 characters',
        },
        {
          rule: 'customRegexp',
          value: /^[\p{L}]+$/u,
          errorMessage: 'Enter a valid city name',
        },
      ])
      .addField('#state-hidden', [
        {
          rule: 'required',
          errorMessage: 'This field is required',
        },
      ])
      .addField('#zip', [
        {
          rule: 'required',
          errorMessage: 'This field is required',
        },
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Must be at least 3 characters',
        },
        {
          rule: 'maxLength',
          value: 10,
          errorMessage: 'Must be less than 10 characters',
        },
        {
          rule: 'customRegexp',
          value: /^\d+$/,
          errorMessage: 'Enter a valid ZIP / Postal Code',
        },
      ])
      .addField('#mail', [
        {
          rule: 'required',
          errorMessage: 'This field is required',
        },
        {
          rule: 'customRegexp',
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/,
          errorMessage: 'Write correct email',
        },
      ])
      .addField('#phone', [
        {
          rule: 'required',
          errorMessage: 'This field is required',
        },
        {
          rule: 'minLength',
          value: 4,
          errorMessage: 'Must be at least 4 characters',
        },
        {
          rule: 'maxLength',
          value: 15,
          errorMessage: 'Must be less than 15 characters',
        },
        {
          rule: 'customRegexp',
          value: /^\+?\d+$/,
          errorMessage: 'Enter a valid phone number',
        },
      ]);

    if (document.readyState === 'complete') {
      return;
    }
    resolve(false);
  });
}

// export function validateBillForm(): Promise<boolean> {
//   return new Promise((resolve) => {
//     const form = getElement('#billing') as HTMLFormElement;
//     const cardInput = getElement('#card') as HTMLInputElement;
//     const expirationInput = getElement('#expiration') as HTMLInputElement;
//     const cvcInput = getElement('#cvc') as HTMLInputElement;
//
//     if (!form || !cardInput || !expirationInput || !cvcInput) {
//       resolve(false);
//       console.log(1);
//       return;
//     }
//
//     // Маски для полей ввода
//     const maskOptionsCard = {
//       mask: '0000 0000 0000 0000',
//     };
//     const maskOptionsDate = {
//       mask: '00/00',
//     };
//     const maskOptionsCvc = {
//       mask: '000',
//     };
//
//     // Применение масок
//     void new IMask(cardInput, maskOptionsCard);
//     void new IMask(expirationInput, maskOptionsDate);
//     void new IMask(cvcInput, maskOptionsCvc);
//
//     // Инициализация валидатора
//     const validator = new JustValidate(form, {
//       focusInvalidField: true,
//       lockForm: true,
//       validateBeforeSubmitting: true,
//     });
//
//     validator
//       .addField('#card', [
//         {
//           rule: 'required',
//           errorMessage: 'This field is required',
//         },
//       ])
//       .addField('#expiration', [
//         {
//           rule: 'required',
//           errorMessage: 'This field is required',
//         },
//       ])
//       .addField('#cvc', [
//         {
//           rule: 'required',
//           errorMessage: 'This field is required',
//         }
//       ]);
//
//     // После загрузки страницы проверяем форму
//     if (document.readyState === 'complete') {
//       validator.revalidate().then((isValid: boolean) => {
//         resolve(isValid);
//       });
//
//       return;
//     }
//
//     // Если форма еще не загружена, возвращаем false
//     resolve(false);
//   });
// }

export function initializeMasks() {
  const cardInput = getElement('#card') as HTMLInputElement;
  const expirationInput = getElement('#expiration') as HTMLInputElement;
  const cvcInput = getElement('#cvc') as HTMLInputElement;

  if (cardInput) {
    const cardMask = new Inputmask('0000 0000 0000 0000');
    cardMask.mask(cardInput);
  }

  if (expirationInput) {
    const dateMask = new Inputmask('00/00');
    dateMask.mask(expirationInput);
  }

  if (cvcInput) {
    const cvcMask = new Inputmask('000');
    cvcMask.mask(cvcInput);
  }
}


