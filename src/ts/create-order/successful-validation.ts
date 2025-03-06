import { getElement } from '../composables/use-call-dom.ts';
import { validateOrderInfo } from '../create-order/validate-form.ts';
import { createOrder } from '../composables/use-api.ts';
import { OrderData, ProductLocalStorge } from '../components/interfaces.ts';
import IMask from 'imask';

const createBtnMain = getElement('.create-order-form__btn');
const createBtnSub = getElement('.order-list__btn');
const storedUserInfo = JSON.parse(localStorage.getItem('userInfo') || '[]');

export async function ctrateOrder() {
  if (!createBtnMain || !createBtnSub) return;

  applyMask();
  addUserInfo();

  createBtnSub.addEventListener('click', () => {
    createBtnMain.click();
  });

  createBtnMain.addEventListener('click', async () => {
    const formValidate = await validateOrderInfo();
    if (formValidate) addToOrders();
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

  createOrder(orderData)
    .then((response) => {
      console.log('Order created successfully:', response);
      localStorage.removeItem('cartItems');
      window.location.href = '/Vitamin/successful-order.html';
    })
    .catch((error) => {
      console.error('Error creating order:', error);
    });
}

function applyMask() {
  const cardInput = getElement('#card') as HTMLInputElement;
  const expirationInput = getElement('#expiration') as HTMLInputElement;
  const cvcInput = getElement('#cvc') as HTMLInputElement;

  if (!cardInput || !expirationInput || !cvcInput) {
    return;
  }

  IMask(cardInput, { mask: '0000 0000 0000 0000' });
  IMask(expirationInput, { mask: '00/00' });
  IMask(cvcInput, { mask: '000' });
}

function addUserInfo() {
  if (!storedUserInfo) return;

  const firstNameInp = getElement('#first-name') as HTMLInputElement;
  const lastNameInp = getElement('#last-name') as HTMLInputElement;
  const addressFirstInp = getElement('#address-line1') as HTMLInputElement;
  const addressSecondInp = getElement('#address-line2') as HTMLInputElement;
  const cityInp = getElement('#city') as HTMLInputElement;

  if (!firstNameInp || !lastNameInp || !addressFirstInp || !addressSecondInp || !cityInp) return;

  firstNameInp.value = storedUserInfo.first_name;
  lastNameInp.value = storedUserInfo.last_name;
  // firstNameInp.value = storedUserInfo.first_name;
}
