import IMask from 'imask';
import JustValidate from 'just-validate';
import validator from 'validator';
import { paymentRequest } from './payment-request.ts';

export let validate: any

export function validateCard() {
  const cardInput: HTMLInputElement = document.querySelector('#card_number') as HTMLInputElement;
  IMask(cardInput, { mask: '0000-0000-0000-0000' });

  const dateInput: HTMLInputElement = document.querySelector('#card_date') as HTMLInputElement;
  IMask(dateInput, {
    mask: 'MM/YY',
    blocks: {
      MM: { mask: IMask.MaskedRange, from: 1, to: 12 },
      YY: { mask: IMask.MaskedRange, from: 0, to: 99 },
    },
  });

  const cvcInput: HTMLInputElement = document.querySelector('#card_cvv') as HTMLInputElement;
  IMask(cvcInput, { mask: '000[0]' });

  const form: HTMLFormElement = document.querySelector('#payment-methods-form') as HTMLFormElement;
  validate = new JustValidate(form);

  validate.addField('#card_number', [
    {
      validator: (value: string): boolean => {
        const cleanValue: string = value.replace(/\s/g, '');
        return validator.isCreditCard(cleanValue);
      },
      errorMessage: 'Incorrect card number',
    },
  ]);

  validate.addField('#card_date', [
    {
      validator: (value: string): boolean => {
        const [month, year]: number[] = value.split('/').map(Number);
        const currentYear: number = new Date().getFullYear() % 100;
        const currentMonth: number = new Date().getMonth() + 1;
        if (month < 1 || month > 12) return false;
        if (year < currentYear) return false;
        if (year === currentYear && month < currentMonth) return false;
        return true;
      },
      errorMessage: 'Incorrect or expired date',
    },
  ]);
  validate.addField('#card_cvv', [
    {
      rule: 'customRegexp',
      value: /^\d+$/u,
      errorMessage: 'Enter a valid code!',
    },
  ]);
  validate.addField('#card_cvv', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'too short',
    },
  ]);

  validate.onSuccess(async () => {
    const formData = new FormData(form);
    const data: any = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    await paymentRequest(data);
  });
}