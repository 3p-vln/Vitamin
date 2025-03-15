import { CardInfo, UserInfo } from '../interfaces.ts';

export function renderValueForm() {
  const userData = localStorage.getItem('userInfo');

  if (!userData) return;

  const userInfo: UserInfo = JSON.parse(userData);

  const fields: { inputId: string; key: keyof CardInfo }[] = [
    { inputId: 'payment-number-card', key: 'card_number' },
    { inputId: 'payment-date', key: 'card_date' },
    { inputId: 'payment-amount', key: 'card_cvv' },

  ];

  fields.forEach(field => {
    const input = document.getElementById(field.inputId) as HTMLInputElement;
    if (input && userInfo.card_info) {
      input.value = userInfo.card_info[field.key] as string;
    }
  });
}