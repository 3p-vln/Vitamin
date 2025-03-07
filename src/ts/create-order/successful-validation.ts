import { getElement } from '../composables/use-call-dom.ts';
import { validateOrderInfo } from '../create-order/validate-form.ts';
import { createOrder } from '../composables/use-api.ts';
import { OrderData, ProductLocalStorge } from '../components/interfaces.ts';
import IMask from 'imask';

const createBtnMain = getElement('.create-order-form__btn');
const createBtnSub = getElement('.order-list__btn');
const storedUserInfo = JSON.parse(localStorage.getItem('userInfo') || '[]');
const storedOrderInfo = JSON.parse(localStorage.getItem('orderInfo') || '[]');

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

export async function ctrateOrder() {
  if (!createBtnMain || !createBtnSub) return;

  applyMask();
  // addUserInfo();
  addUserInfoToForm();

  createBtnSub.addEventListener('click', () => {
    createBtnMain.click();
  });

  createBtnMain.addEventListener('click', async () => {
    const formValidate = await validateOrderInfo();
    if (formValidate) {
      addUserInfoToLocal();
      addToOrders();
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
  if (!cardInput || !expirationInput || !cvcInput) {
    return;
  }

  IMask(cardInput, { mask: '0000 0000 0000 0000' });
  IMask(expirationInput, { mask: '00/00' });
  IMask(cvcInput, { mask: '000' });
}

function addUserInfoToLocal() {
  if (!firstNameInput || !lastNameInput || !addressFirstInput || !addressSecondInput || !cityInput || !stateInput || !zipInput || !emailInput || !phoneInput || !cardInput || !expirationInput || !cvcInput) return;

  const orderInfo = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    addressFirst: addressFirstInput.value,
    addressSecond: addressSecondInput.value,
    city: cityInput.value,
    state: stateInput.value,
    zip: zipInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    card: cardInput.value,
    date: expirationInput.value,
    cvc: cvcInput.value,
  };

  console.log('Order created:', orderInfo);

  localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
}

function addUserInfoToForm() {
  if (!firstNameInput || !lastNameInput || !addressFirstInput || !addressSecondInput || !cityInput || !stateInput || !zipInput || !emailInput || !phoneInput || !cardInput || !expirationInput || !cvcInput) return;

  if (storedOrderInfo && !storedUserInfo) {
    firstNameInput.value = storedOrderInfo.firstName;
    lastNameInput.value = storedOrderInfo.lastName;
    addressFirstInput.value = storedOrderInfo.addressFirst;
    addressSecondInput.value = storedOrderInfo.addressSecond;
    cityInput.value = storedOrderInfo.city;
    stateInput.value = storedOrderInfo.state;
    zipInput.value = storedOrderInfo.zip;
    emailInput.value = storedOrderInfo.email;
    phoneInput.value = storedOrderInfo.phone;
    cardInput.value = storedOrderInfo.card;
    expirationInput.value = storedOrderInfo.expiration;
    cvcInput.value = storedOrderInfo.cvc;
  }
}
