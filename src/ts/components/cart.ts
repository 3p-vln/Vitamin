import { classManipulator, getElement, getElements } from '../composables/useCallDom';
import { initCounter } from './counter';

const cartBtn = getElement('.header__bag');
const cart = getElement('.cart');
const cartCloseBtn = getElement('.cart__close');
const cartBg = getElement('.cart__bg');
const cardCounters = getElements('.prod__counter');

const prodList = getElements('.prod');

const backToShopBtn = getElement('.info__backbtn');

export async function initCart() {
  if (!cartBtn || !cartCloseBtn || !cartBg || !cardCounters) return;

  cartBtn.addEventListener('click', (event) => {
    cartActive(event);
    scrollLock();
  });
  cartCloseBtn.addEventListener('click', () => {
    cartClose();
    scrollLock();
  });

  cardCounters.forEach((counter) => {
    initCounter(counter);
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
