import JustValidate from 'just-validate';
import { registrationRequest } from './registration-request.ts';


export function validateRegularForm() {
  const validator = new JustValidate('#regular-registration');

  validator
    .addField('#regular-registration-email', [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        rule: 'email',
        errorMessage: 'Enter a valid email address',
      },
    ])
    .addField('#regular-registration-first-name', [
      {
        rule: 'required',
        errorMessage: 'Name required',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'The name must contain a minimum of 2 characters',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'The name must not exceed 30 characters',
      },
      {
        rule: 'customRegexp',
        value: /^[A-Za-zА-Яа-яЁё]+$/,
        errorMessage: 'The name must contain only letters',
      },
    ])
    .addField('#regular-registration-last-name', [
      {
        rule: 'required',
        errorMessage: 'Last name required',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Last name must contain a minimum of 2 characters',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Last name must not exceed 30 characters',
      },
      {
        rule: 'customRegexp',
        value: /^[A-Za-zА-Яа-яЁё]+$/,
        errorMessage: 'The name must contain only letters',
      },
    ])
    .addField('#regular-registration-password', [
      {
        rule: 'required',
        errorMessage: 'Password required',
      },
      {
        rule: 'minLength',
        value: 6,
        errorMessage: 'Password must contain a minimum of 6 characters',
      },
      {
        rule: 'maxLength',
        value: 50,
        errorMessage: 'Password must not exceed 50 characters',
      },
      {
        rule: 'customRegexp',
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        errorMessage: 'The password must contain at least one uppercase letter, one lowercase letter, and one number',
      },
    ])
    .onSuccess( async () => {
      console.log('Форма успешно отправлена!');
      const form = document.getElementById('regular-registration') as HTMLFormElement | undefined;
      const formData: FormData = new FormData(form);
      const data: any = {
        role_type: 'regular',
      };

      for (let [key, value] of formData.entries()) {
        data[key] = value ;
      }
      console.log(data);
      await registrationRequest(data)
    });
}

export function validateWholesaleForm() {
  const validator = new JustValidate('#wholesale-registration');

  validator
    .addField('#wholesale-registration-email', [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        rule: 'email',
        errorMessage: 'Invalid email format',
      },
    ])
    .addField('#wholesale-registration-first-name', [
      {
        rule: 'required',
        errorMessage: 'First name is required',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'First name must be at least 2 characters',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'First name must be at most 30 characters',
      },
      {
        rule: 'customRegexp',
        value: /^[A-Za-zА-Яа-яЁё]+$/,
        errorMessage: 'First name must contain only letters',
      },
    ])
    .addField('#wholesale-registration-last-name', [
      {
        rule: 'required',
        errorMessage: 'Last name is required',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Last name must be at least 2 characters',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Last name must be at most 30 characters',
      },
      {
        rule: 'customRegexp',
        value: /^[A-Za-zА-Яа-яЁё]+$/,
        errorMessage: 'Last name must contain only letters',
      },
    ])
    .addField('#wholesale-registration-password', [
      {
        rule: 'required',
        errorMessage: 'Password is required',
      },
      {
        rule: 'minLength',
        value: 6,
        errorMessage: 'Password must be at least 6 characters',
      },
      {
        rule: 'maxLength',
        value: 50,
        errorMessage: 'Password must be at most 50 characters',
      },
      {
        rule: 'customRegexp',
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        errorMessage: 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
      },
    ])
    .addField('#wholesale-registration-file', [
      {
        rule: 'required',
        errorMessage: 'File is required',
      },
      {
        validator: () => {
          const fileInput = document.querySelector('#wholesale-registration-file') as HTMLInputElement;
          if (!fileInput.files || fileInput.files.length === 0) return false;

          const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
          return allowedTypes.includes(fileInput.files[0].type);
        },
        errorMessage: 'Only image files (JPG, JPEG, PNG, webp) are allowed',
      },
    ])
    .onSuccess(() => {
      console.log('Form submitted successfully!');
    });
}
