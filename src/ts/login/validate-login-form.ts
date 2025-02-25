import JustValidate from 'just-validate';
import { loginRequest } from './login-request.ts';

export function validateRegisterForm() {



    const validator = new JustValidate('#login-form');

    validator
      .addField('#regular-login-email', [
        {
          rule: 'required',
          errorMessage: 'Email is required',
        },
        {
          rule: 'email',
          errorMessage: 'Please enter a valid email address',
        },
      ])
      .addField('#login-password', [
        {
          rule: 'required',
          errorMessage: 'Password is required',
        },
        {
          rule: 'minLength',
          value: 8,
          errorMessage: 'Password must be at least 8 characters long',
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: 'Password must be less than 30 characters',
        },
      ])
      .onSuccess( async () => {

        console.log('Form is valid. Submitting...');

        const form = document.getElementById('login-form') as HTMLFormElement | undefined;
        const formData: FormData = new FormData(form);
        const data: any = {}

        for (let [key, value] of formData.entries()) {
          data[key] = value ;
        }

        await loginRequest(data)
      })


}