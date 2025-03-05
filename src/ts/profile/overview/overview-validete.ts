import JustValidate from 'just-validate';
import { overviewRequest } from './overview-request.ts';

export function overviewValidete(){
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

  const validation = new JustValidate(form);

  validation
    .addField('#overview-first-name', [
      {
        rule: 'required',
        errorMessage: 'First Name is required',
      },
    ])
    .addField('#overview-last-name', [
      {
        rule: 'required',
        errorMessage: 'Last Name is required',
      },
    ])
    .addField('#overview-address-line1', [
      {
        rule: 'required',
        errorMessage: 'Address line 1 is required',
      },
    ])
    .addField('#overview-address-line2', [
      {
        rule: 'required',
        errorMessage: 'Address line 2 is required',
      },
    ])
    .addField('#overview-city', [
      {
        rule: 'required',
        errorMessage: 'City is required',
      },
    ])
    .addField('#overview-postal-code', [
      {
        rule: 'required',
        errorMessage: 'ZIP / Postal code is required',
      },
    ])
    .addField('#overview-email', [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        rule: 'email',
        errorMessage: 'Email is invalid',
      },
    ])
    .addField('#overview-phone', [
      {
        rule: 'required',
        errorMessage: 'Phone Number is required',
      },
    ])
    .onSuccess(() => {
      const formData: FormData = {
        first_name: (form.querySelector('#overview-first-name') as HTMLInputElement).value,
        last_name: (form.querySelector('#overview-last-name') as HTMLInputElement).value,
        address_one: (form.querySelector('#overview-address-line1') as HTMLInputElement).value,
        address_two: (form.querySelector('#overview-address-line2') as HTMLInputElement).value,
        city: (form.querySelector('#overview-city') as HTMLInputElement).value,
        state_province: (form.querySelector('.select-selected') as HTMLElement).textContent || '',
        postal_code: (form.querySelector('#overview-postal-code') as HTMLInputElement).value,
        email: (form.querySelector('#overview-email') as HTMLInputElement).value,
        phone: (form.querySelector('#overview-phone') as HTMLInputElement).value,
      };
      overviewRequest(formData)
    });
}