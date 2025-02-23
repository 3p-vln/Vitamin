import JustValidate from 'just-validate';
import { getElement } from '../composables/useCallDom';

export function validateNameForm(): Promise<boolean> {
  return new Promise((resolve) => {
    const form = getElement('#firstQuestion') as HTMLFormElement;
    const firstNameInput = getElement('#firstName') as HTMLInputElement;

    if (!form || !firstNameInput) {
      resolve(false);
      return;
    }

    const validator = new JustValidate(form, {
      focusInvalidField: true,
      lockForm: true,
      validateBeforeSubmitting: true,
    });

    validator.addField('#firstName', [
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
    ]);

    if (document.readyState === 'complete') {
      validator.revalidate().then((isValid: boolean) => {
        if (isValid) {
          localStorage.setItem('firstName', firstNameInput.value);
        }

        resolve(isValid);
      });

      return;
    }
    resolve(false);
  });
}

export function validateEmailForm(): Promise<boolean> {
  return new Promise((resolve) => {
    const form = getElement('#emailQuestion') as HTMLFormElement;
    const firstEmailInput = getElement('#email') as HTMLInputElement;

    if (!form || !firstEmailInput) {
      resolve(false);
      return;
    }

    const validator = new JustValidate(form, {
      focusInvalidField: true,
      lockForm: true,
      validateBeforeSubmitting: true,
    });

    validator.addField('#email', [
      {
        rule: 'required',
        errorMessage: 'This field is required',
      },
      {
        rule: 'customRegexp',
        value: /^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
        errorMessage: 'Write correct email',
      },
    ]);

    if (document.readyState === 'complete') {
      validator.revalidate().then((isValid: boolean) => {
        resolve(isValid);
      });

      return;
    }
    resolve(false);
  });
}
