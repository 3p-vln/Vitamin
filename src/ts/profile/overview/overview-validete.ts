import JustValidate from 'just-validate';
import { overviewRequest } from './overview-request.ts';
import parsePhoneNumberFromString from 'libphonenumber-js';

export let validation: any;

export function overviewValidete() {
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

  const form = document.getElementById('overview-form') as HTMLFormElement;

  validation = new JustValidate(form);

  validation
    .addField('#first_name', [
      {
        rule: 'required',
        errorMessage: 'First Name is required',
      },
    ])
    .addField('#last_name', [
      {
        rule: 'required',
        errorMessage: 'Last Name is required',
      },
    ])
    .addField('#address_one', [
      {
        rule: 'required',
        errorMessage: 'Address line 1 is required',
      },
    ])
    .addField('#address_two', [
      {
        rule: 'required',
        errorMessage: 'Address line 2 is required',
      },
    ])
    .addField('#city', [
      {
        rule: 'required',
        errorMessage: 'City is required',
      },
    ])
    .addField('#postal_code', [
      {
        rule: 'required',
        errorMessage: 'ZIP / Postal code is required',
      },
      {
        rule: 'number',
        errorMessage: 'Postal code only number',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        rule: 'email',
        errorMessage: 'Email is invalid',
      },
    ])
    .addField('#phone', [
      {
        rule: 'required',
        errorMessage: 'Phone Number is required',
      },
      {
        rule: 'customRegexp',
        value: /^\+38 \(\d{3}\)\d{3}-\d{2}-\d{2}$/,
        errorMessage: 'Phone Number must be in the format +38 (XXX)XXX-XX-XX',
      },
    ])
    .addField('#overview-state', [
      {
        rule: 'required',
        errorMessage: 'State is required',
      },
    ])
    .onSuccess(() => {
      const formData: FormData = {
        first_name: (form.querySelector('#first_name') as HTMLInputElement).value,
        last_name: (form.querySelector('#last_name') as HTMLInputElement).value,
        address_one: (form.querySelector('#address_one') as HTMLInputElement).value,
        address_two: (form.querySelector('#address_two') as HTMLInputElement).value,
        city: (form.querySelector('#city') as HTMLInputElement).value,
        state_province: (form.querySelector('#overview-state') as HTMLInputElement).value,
        postal_code: (form.querySelector('#postal_code') as HTMLInputElement).value,
        email: (form.querySelector('#email') as HTMLInputElement).value,
        phone: formatePhoneNumber(),
      };
      overviewRequest(formData);
    });

  function formatePhoneNumber() {
    const phoneInput = form.querySelector('#phone') as HTMLInputElement;
    if (phoneInput && phoneInput.value) {
      const value = phoneInput.value; // Получаем значение из поля ввода
      const phoneNumberParse = parsePhoneNumberFromString(value); // Парсим номер
      if (phoneNumberParse && phoneNumberParse.isValid()) {
        return phoneNumberParse.number;
      }
      return value.replace(/\D/g, '');
    }
    return '';
  }
}
