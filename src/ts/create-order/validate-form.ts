import JustValidate from 'just-validate';
import { getElement } from '../composables/use-call-dom.ts';

export async function validateOrderInfo(): Promise<boolean> {
  return new Promise((resolve) => {
    const form = getElement('#create-order') as HTMLFormElement;
    const cardInput = getElement('#card') as HTMLInputElement;
    const expirationInput = getElement('#expiration') as HTMLInputElement;
    const cvcInput = getElement('#cvc') as HTMLInputElement;

    if (!form || !cardInput || !expirationInput || !cvcInput) {
      resolve(false);
      return;
    }

    const maskCard = (value: string) => {
      value = value.replace(/\D/g, '').slice(0, 16);
      return value.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    };

    const maskDate = (value: string) => {
      value = value.replace(/\D/g, '').slice(0, 4);
      return value.replace(/(\d{2})(?=\d)/g, '$1/').trim();
    };

    const maskCvc = (value: string) => {
      value = value.replace(/\D/g, '').slice(0, 3);
      return value;
    };

    cardInput.addEventListener('input', () => {
      cardInput.value = maskCard(cardInput.value);
    });

    expirationInput.addEventListener('input', () => {
      expirationInput.value = maskDate(expirationInput.value);
    });

    cvcInput.addEventListener('input', () => {
      cvcInput.value = maskCvc(cvcInput.value);
    });

    const validator = new JustValidate(form, {
      focusInvalidField: true,
      lockForm: false, // Убедитесь, что форма не блокируется
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
          value: /^[\p{L}\d.,\s]+$/u,
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
          value: /^[\p{L}\d.,\s]+$/u,
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
          errorMessage: 'Enter a valid city name',
        },
      ])
      .addField('#state', [
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
      ])
      .addField('#card', [
        {
          rule: 'required',
          errorMessage: 'This field is required',
        },
        {
          rule: 'minLength',
          value: 19,
          errorMessage: 'Must be at least 16 characters',
        },
      ])
      .addField('#expiration', [
        {
          rule: 'required',
          errorMessage: 'This field is required',
        },
        {
          rule: 'minLength',
          value: 5,
          errorMessage: 'Must be at least 4 characters',
        },
      ])
      .addField('#cvc', [
        {
          rule: 'required',
          errorMessage: 'This field is required',
        },
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Must be at least 3 characters',
        },
      ]);

    validator.validate(); // Запускаем валидацию сразу
    validator.onSuccess(() => resolve(true));
    validator.onFail(() => resolve(false));
  });
}
