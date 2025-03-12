import apiClient from '../../registration/api-client.ts';
import { UserInfo } from '../interfaces.ts';



export async function renderFormRole() {

  try {
    const res = await apiClient.get('/profile/info')
    if(res.status === 200) {
      localStorage.setItem('userInfo', JSON.stringify(res.data))
    }
  } catch (errorError) {
    console.log(errorError)
  }
  const userData = localStorage.getItem('userInfo');
  const form = document.getElementById('overview-form');
  if (!userData) return;

  const userInfo: UserInfo = JSON.parse(userData);

  const userRoleContainer = document.querySelector('.overview__role') as HTMLDivElement;
  if (userRoleContainer) {
    userRoleContainer.innerText = `${userInfo.role_type.charAt(0).toUpperCase() + userInfo.role_type.slice(1).toLowerCase()} customer`;
  }

  if (userInfo.role_type !== 'regular') {
    document.querySelector('.overview-form__field-wrapper')!.classList.remove('overview-form__field-wrapper_hidden');
  }

  const fields: { inputId: string; key: keyof UserInfo }[] = [
    { inputId: 'overview-first-name', key: 'first_name' },
    { inputId: 'overview-last-name', key: 'last_name' },
    { inputId: 'overview-address-line1', key: 'address_one' },
    { inputId: 'overview-address-line2', key: 'address_two' },
    { inputId: 'overview-city', key: 'city' },
    { inputId: 'overview-email', key: 'email' },
    { inputId: 'overview-phone', key: 'phone' },
    { inputId: 'overview-postal-code', key: 'postal_code' },
    { inputId: 'overview-state', key: 'state_province' }

  ];

  fields.forEach(field => {
    const input = document.getElementById(field.inputId) as HTMLInputElement;
    if (input && userInfo[field.key]) {
      input.value = userInfo[field.key] as string;
    }
  });

  if (userInfo.state_province && form) {
    const select = form.querySelector('.select-selected');
    if (select) {
      select.textContent = userInfo.state_province;
    }
  }
}