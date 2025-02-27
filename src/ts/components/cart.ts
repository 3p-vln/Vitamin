import { classManipulator, getElement, getElements } from '../composables/useCallDom';
import { initCounter } from './counter';
import { initDropdown } from './dropdown';

const cartBtn = getElement('.header__bag');
const cart = getElement('.cart');
const cartCloseBtn = getElement('.cart__close');
const cartBg = getElement('.cart__bg');

const prodList = getElements('.prod');

const backToShopBtn = getElement('.info__backbtn');

export async function initCart() {
  if (!cartBtn || !cartCloseBtn || !cartBg) return;

  cartBtn.addEventListener('click', (event) => {
    cartActive(event);
    scrollLock();
  });

  cartCloseBtn.addEventListener('click', () => {
    cartClose();
    scrollLock();
  });

  prodList.forEach((prod) => {
    const prodCounter = getElement('.prod__counter', prod);
    const prodDropdown = getElement('.prod__autoship', prod);
    const prodAutoshipText = getElement('.prod__autoship-text', prod);

    if (!prodCounter || !prodDropdown || !prodAutoshipText) return;

    initCounter(prodCounter);
    initDropdown(prodDropdown);
    changeAutoshipText(prodAutoshipText);
  });

  removeProd();

  cartBg.addEventListener('click', () => {
    cartClose();
    scrollLock();
  });
}

function cartActive(event: Event) {
  event.stopPropagation();

  if (!cart) return;

  classManipulator(cart, 'add', 'cart_active');

  if (backToShopBtn) backToShopBtn.style.zIndex = '1';
}

function cartClose() {
  if (!cart) return;

  classManipulator(cart, 'remove', 'cart_active');

  if (backToShopBtn) backToShopBtn.style.zIndex = '25';
}

function removeProd() {
  if (!prodList) return;

  prodList.forEach((prod) => {
    const removeBtn = getElement('.prod__close', prod);

    if (!removeBtn) return;
    removeBtn.addEventListener('click', () => {
      prod.remove();
    });
  });
}

function scrollLock() {
  if (!cart) return;

  const body = getElement('body');

  if (!body) return;

  if (cart.classList.contains('cart_active')) {
    body.style.overflow = 'hidden';

    return;
  }

  body.style.overflow = 'auto';
}

function changeAutoshipText(textEl: HTMLElement) {
  if (window.innerWidth < 768) {
    textEl.innerText = 'Deliver every';
  }
}
