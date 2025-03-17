import { getElement } from '../composables/use-call-dom.ts';
import { validateOrderInfo } from './validate-form.ts';
import { createOrder } from '../composables/use-api.ts';
import { OrderData, ProductLocalStorge, UserStore } from '../../typings/interfaces.ts';
import IMask from 'imask';

const createBtnMain = getElement('.create-order-form__btn');
const createBtnSub = getElement('.order-list__btn');
const storedUserInfo = JSON.parse(localStorage.getItem('userInfo') || 'null') as UserStore;
const storedOrderInfo = JSON.parse(localStorage.getItem('orderInfo') || 'null');

const firstNameInput = getElement<HTMLInputElement>('#first-name');
const lastNameInput = getElement<HTMLInputElement>('#last-name');
const addressFirstInput = getElement<HTMLInputElement>('#address-line1');
const addressSecondInput = getElement<HTMLInputElement>('#address-line2');
const cityInput = getElement<HTMLInputElement>('#city');
const stateInput = getElement<HTMLInputElement>('#state');
const zipInput = getElement<HTMLInputElement>('#zip');
const emailInput = getElement<HTMLInputElement>('#mail');
const phoneInput = getElement<HTMLInputElement>('#phone');
const cardInput = getElement<HTMLInputElement>('#card');
const expirationInput = getElement<HTMLInputElement>('#expiration');
const cvcInput = getElement<HTMLInputElement>('#cvc');

const requiredFields = [firstNameInput, lastNameInput, addressFirstInput, addressSecondInput, cityInput, stateInput, zipInput, emailInput, phoneInput, cardInput, expirationInput, cvcInput];

export function crateOrder() {
  if (!createBtnMain || !createBtnSub) return;

  addUserInfoToForm();
  applyMask();

  createBtnSub.addEventListener('click', () => {
    createBtnMain.click();
  });

  createBtnMain.addEventListener('click', async () => {
    try {
      const formValidate = await validateOrderInfo();
      if (formValidate) {
        addUserInfoToLocal();
        addToOrders();
      }
    } catch (error) {
      console.error(error);
    }
  });
}

function addToOrders() {
  if (!storedUserInfo) {
    localStorage.removeItem('cartItems');
    window.location.href = '/Vitamin/successful-order.html';
  }

  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  if (cartItems.length === 0) {
    console.log('Cart is empty!');
    return;
  }

  console.log(storedUserInfo);

  const orderData: OrderData = {
    order: cartItems.map((item: ProductLocalStorge) => ({
      product_id: item.id,
      quantity: item.counts,
    })),
    user_id: storedUserInfo.user_id,
  };

  try {
    createOrder(orderData).then((response) => {
      console.log('Order created successfully:', response);
      localStorage.removeItem('cartItems');
      window.location.href = '/Vitamin/successful-order.html';
    });
  } catch (error) {
    console.error(error);
  }
}

function applyMask() {
  if (!cardInput || !expirationInput || !cvcInput || !phoneInput) {
    return;
  }

  IMask(cardInput, { mask: '0000-0000-0000-0000' });
  IMask(expirationInput, { mask: '00/00' });
  IMask(cvcInput, { mask: '000' });
  IMask(phoneInput, { mask: '+000 (00) 00 00 000' });
}

function getInputValue(input: HTMLInputElement | null): string | undefined {
  if (input) return input.value;
}

function addUserInfoToLocal() {
  if (requiredFields.some((field) => !field)) return;

  const orderInfo = {
    firstName: getInputValue(firstNameInput),
    lastName: getInputValue(lastNameInput),
    addressFirst: getInputValue(addressFirstInput),
    addressSecond: getInputValue(addressSecondInput),
    city: getInputValue(cityInput),
    state: getInputValue(stateInput),
    zip: getInputValue(zipInput),
    email: getInputValue(emailInput),
    phone: getInputValue(phoneInput),
    card: getInputValue(cardInput),
    date: getInputValue(expirationInput),
    cvc: getInputValue(cvcInput),
  };

  console.log('Order created:', orderInfo);

  localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
}

function setInputValue(input: HTMLInputElement | null, value: string | undefined) {
  if (input) input.value = value || '';
}

function addUserInfoToForm() {
  if (requiredFields.some((field) => field === null)) return;

  if (!storedUserInfo && !storedOrderInfo) return;

  if (storedOrderInfo && !storedUserInfo) {
    setInputValue(firstNameInput, storedOrderInfo.firstName);
    setInputValue(lastNameInput, storedOrderInfo.lastName);
    setInputValue(addressFirstInput, storedOrderInfo.addressFirst);
    setInputValue(addressSecondInput, storedOrderInfo.addressSecond);
    setInputValue(cityInput, storedOrderInfo.city);
    setInputValue(stateInput, storedOrderInfo.state);
    setInputValue(zipInput, storedOrderInfo.zip);
    setInputValue(emailInput, storedOrderInfo.email);
    setInputValue(phoneInput, storedOrderInfo.phone);
    setInputValue(cardInput, storedOrderInfo.card);
    setInputValue(expirationInput, storedOrderInfo.date);
    setInputValue(cvcInput, storedOrderInfo.cvc);

    return;
  }

  if (storedUserInfo) {
    setInputValue(firstNameInput, storedUserInfo.first_name);
    setInputValue(lastNameInput, storedUserInfo.last_name);
    setInputValue(addressFirstInput, storedUserInfo.address_one);
    setInputValue(addressSecondInput, storedUserInfo.address_two);
    setInputValue(cityInput, storedUserInfo.city);
    setInputValue(stateInput, storedUserInfo.state_province);
    setInputValue(zipInput, storedUserInfo.postal_code);
    setInputValue(emailInput, storedUserInfo.email);
    setInputValue(phoneInput, storedUserInfo.phone);
    setInputValue(cardInput, storedUserInfo.card_info.card_number);
    setInputValue(expirationInput, storedUserInfo.card_info.card_date);
    setInputValue(cvcInput, storedUserInfo.card_info.card_cvv);

    return;
  }
}
