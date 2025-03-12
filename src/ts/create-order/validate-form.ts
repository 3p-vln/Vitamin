import JustValidate from 'just-validate';
import { getElement } from '../composables/use-call-dom.ts';

export async function validateOrderInfo(): Promise<boolean> {
  return new Promise((resolve) => {
    const form = getElement('#create-order') as HTMLFormElement;
    if(!form) return;

    const validator = new JustValidate(form, {
      focusInvalidField: true,
      lockForm: false,
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
          rule: 'maxLength',
          value: 19,
          errorMessage: 'Must be less than 13 characters',
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

    validator.validate();
    validator.onSuccess(() => resolve(true));
    validator.onFail(() => resolve(false));
  });
}
