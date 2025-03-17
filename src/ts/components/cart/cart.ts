import { classManipulator, getElement, getElements, renderElement } from '../../composables/use-call-dom.ts';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { loadCartFromLocalStorage, totalCartPrice } from './render-cart.ts';

const cartBtn = getElement('.header__bag');
const cart = getElement('.cart');
const cartCloseBtn = getElement('.cart__close');
const cartBg = getElement('.cart__bg');
const cartContainer = getElement('.cart__items');
const header = getElement('.header');
const html = getElement('html');

let prodList = getElements('.prod');
let scrollPosition = 0;

const backToShopBtn = getElement('.info__backbtn');

export function initCart() {
  if (!cartBtn || !cartCloseBtn || !cartBg || !cartContainer) return;

  cartBtn.addEventListener('click', (event) => cartActive(event));

  cartCloseBtn.addEventListener('click', () => cartClose());
  cartBg.addEventListener('click', () => cartClose());

  loadCartFromLocalStorage();
  totalCartPrice();

  prodList.forEach((prod) => {
    const prodAutoshipText = getElement('.prod__autoship-text', prod);

    if (!prodAutoshipText) return;

    changeAutoshipText(prodAutoshipText);
  });
}

export function cartActive(event: Event) {
  event.stopPropagation();

  if (!cart) return;

  classManipulator(cart, 'add', 'cart_active');

  if (backToShopBtn) backToShopBtn.style.zIndex = '1';
  disablePageScroll();

  scrollLock();
}

function cartClose() {
  if (!cart) return;

  classManipulator(cart, 'remove', 'cart_active');

  if (backToShopBtn) backToShopBtn.style.zIndex = '25';

  scrollLock();
  enablePageScroll();
}

function scrollLock() {
  if (!header || !html || !cart) return;

  if (cart.classList.contains('cart_active')) {
    scrollPosition = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.width = '100%';

    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.backgroundColor = 'white';

    header.style.paddingRight = `${getScrollbarWidthAlternative()}px`;

    return;
  }

  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.width = '';

  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo({ top: scrollPosition, behavior: 'instant' });
  document.documentElement.style.scrollBehavior = '';

  header.style.top = '';
  header.style.left = '';
  header.style.position = '';
  header.style.backgroundColor = '';

  header.style.paddingRight = '0';
}

function getScrollbarWidthAlternative(): number {
  const div = renderElement('div', '');

  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';

  document.body.appendChild(div);

  const scrollbarWidth = div.offsetWidth - div.clientWidth;

  document.body.removeChild(div);

  return scrollbarWidth;
}

function changeAutoshipText(textEl: HTMLElement) {
  if (window.innerWidth < 768) {
    textEl.innerText = 'Deliver every';
  }
}
