import { classManipulator, getElement, getElements, renderElement } from '../composables/use-call-dom.ts';
import { initCounter } from './counter';
import { initDropdown } from './dropdown';
import { Product, ProductLocalStorge } from './interfaces';

const cartBtn = getElement('.header__bag');
const cart = getElement('.cart');
const cartCloseBtn = getElement('.cart__close');
const cartBg = getElement('.cart__bg');
const cartContainer = getElement('.cart__items');
const storedUserInfo = JSON.parse(localStorage.getItem('userInfo') || '[]');

let prodList = getElements('.prod');
let empty: boolean;

const backToShopBtn = getElement('.info__backbtn');

export async function initCart() {
  if (!cartBtn || !cartCloseBtn || !cartBg || !cartContainer) return;

  cartBtn.addEventListener('click', (event) => {
    cartActive(event);
    scrollLock();
  });

  cartCloseBtn.addEventListener('click', () => {
    cartClose();
    scrollLock();
  });

  loadCartFromLocalStorage();
  totalCartPrice();

  prodList.forEach((prod) => {
    const prodAutoshipText = getElement('.prod__autoship-text', prod);

    if (!prodAutoshipText) return;

    changeAutoshipText(prodAutoshipText);
  });

  cartBg.addEventListener('click', () => {
    cartClose();
    scrollLock();
  });
}

export function cartActive(event: Event) {
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

function removeProd(prodId: number) {
  if (!prodList) return;

  prodList.forEach((prod) => {
    const removeBtn = getElement('.prod__close', prod);

    if (!removeBtn) return;
    removeBtn.addEventListener('click', () => {
      prod.remove();
      removeProductFromLocalStorage(prodId);
    });
  });
}

function removeProductFromLocalStorage(prodId: number) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  cartItems = cartItems.filter((item: Product) => item.id !== prodId);

  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  totalCartPrice();

  if (cartItems.length === 0) {
    const emptyText = getElement('.cart__empty');
    if (emptyText) return;

    empty = true;
    emptyBag(empty);
    totalCartPrice();
    return;
  }
}

function scrollLock() {
  if (!cart) return;

  const body = getElement('body');
  const header = getElement('header');

  if (!body || !header) return;

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  const scrollY = window.scrollY;

  const backBtn = getElement('.info__backbtn');

  if (cart.classList.contains('cart_active')) {
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${scrollbarWidth}px`;
    header.style.paddingRight = `${scrollbarWidth}px`;

    if (scrollY > 50 && backBtn) backBtn.style.opacity = '0';

    return;
  }

  const savedScrollY = Math.abs(parseInt(body.style.top, 10)) || 0;
  body.style.position = '';
  body.style.top = '';
  body.style.left = '';
  body.style.width = '';
  body.style.overflow = '';
  body.style.paddingRight = '';
  header.style.paddingRight = '';

  if (backBtn) {
    backBtn.style.opacity = '';
  }

  window.scrollTo(0, savedScrollY);
}

function changeAutoshipText(textEl: HTMLElement) {
  if (window.innerWidth < 768) {
    textEl.innerText = 'Deliver every';
  }
}

export function renderProdCard(prod: Product, autoshipChecked: boolean = false, autoshipDays: string = '30', counts: number = 1) {
  if (!cartContainer) return;

  const prodCard = renderElement('div', ['cart__item', 'prod', `prod_${prod.id}`]);

  const prodImg = renderElement('div', 'prod__img');

  if (prod.type === 'Vitamins & Dietary Supplements') {
    classManipulator(prodImg, 'add', 'prod__img_purple');
  }
  if (prod.type === 'Minerals') {
    classManipulator(prodImg, 'add', 'prod__img_green-mint');
  }
  if (prod.type === 'Prenatal Vitamins') {
    classManipulator(prodImg, 'add', 'prod__img_pink');
  }
  if (prod.type === 'Pain Relief') {
    classManipulator(prodImg, 'add', 'prod__img_blue');
  }
  if (prod.type === 'Antioxidants') {
    classManipulator(prodImg, 'add', 'prod__img_orange');
  }
  if (prod.type === 'Weight Loss') {
    classManipulator(prodImg, 'add', 'prod__img_dark-blue');
  }
  if (prod.type === 'Probiotics' || prod.type === 'Sale%') {
    classManipulator(prodImg, 'add', 'prod__img_red');
  }

  prodImg.innerHTML = `
    <img src="${prod.img}" alt="" />
  `;

  const prodInfo = renderElement('div', 'prod__info');

  const titleAndClose = renderElement('div', 'prod__title-and-close');

  const prodTitle = renderElement('p', 'prod__title');
  prodTitle.innerText = prod.name;

  const prodRmove = renderElement('div', 'prod__close');
  prodRmove.innerHTML = `
    <span></span>
    <span></span>
  `;

  const counterAndPrice = renderElement('div', 'prod__counter-and-price');

  const counter = renderElement('div', 'prod__counter');

  counter.innerHTML = `
    <button class="counter__minus">
      <svg>
        <use href="#minus"></use>
      </svg>
    </button>
    <p class="counter__items">${counts}</p>
    <button class="counter__plus">
      <svg>
        <use href="#plus"></use>
      </svg>
    </button>
  `;

  initCounter(counter);

  const prodPrice = renderElement('p', 'prod__price');
  const priceDiscount = getDiscountedPrice(prod.price, prod.discount, counts);
  const priceTotoal = getTotalPrice(prod.price, counts);

  if (prod.type === 'Sale%') {
    classManipulator(prodPrice, 'add', 'prod__price_sale');
    prodPrice.innerHTML = `<span>$${priceTotoal}</span> $${priceDiscount}`;
  } else {
    prodPrice.innerText = `$${priceTotoal}`;
  }

  const autoship = renderElement('div', 'prod__autoship');

  autoship.innerHTML = `
    <div class="prod__checkbox">
      <input type="checkbox" name="autoship" ${autoshipChecked ? 'checked' : ''}/>
      <span></span>
    </div>
    <p class="prod__autoship-text">Autoship every</p>
    <div class="dropdown">
      <div class="dropdown__box">
        <p class="dropdown__text">${autoshipDays}</p>
        <div class="dropdown__arrow">
          <svg>
            <use href="#back-arrow"></use>
          </svg>
        </div>
      </div>
      <div class="dropdown__list">
        <button class="dropdown__item">10</button>
        <button class="dropdown__item">20</button>
        <button class="dropdown__item">30</button>
        <button class="dropdown__item">40</button>
        <button class="dropdown__item">50</button>
        <button class="dropdown__item">60</button>
      </div>
    </div>
    days
  `;

  initDropdown(autoship);

  titleAndClose.appendChild(prodTitle);
  titleAndClose.appendChild(prodRmove);

  counterAndPrice.appendChild(counter);
  counterAndPrice.appendChild(prodPrice);

  prodInfo.appendChild(titleAndClose);
  prodInfo.appendChild(counterAndPrice);
  prodInfo.appendChild(autoship);

  prodCard.appendChild(prodImg);
  prodCard.appendChild(prodInfo);

  cartContainer.appendChild(prodCard);

  empty = false;
  emptyBag(empty);

  saveProductToLocalStorage(prod);

  prodList = getElements(`.prod`);
  removeProd(prod.id);

  updateInfoInLocal(prod);
}

export function getDiscountedPrice(price: string, discount: number, count: number): string {
  const originalPrice = parseFloat(price);
  if (isNaN(originalPrice)) {
    throw new Error('Invalid price format');
  }

  const discountedPrice = originalPrice * (1 - discount / 100) * count;

  return discountedPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function getTotalPrice(price: string, count: number): string {
  const originalPrice = parseFloat(price);
  if (isNaN(originalPrice)) {
    throw new Error('Invalid price format');
  }

  const totalPrice = originalPrice * count;

  return totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function saveProductToLocalStorage(prod: Product) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  const productExists = cartItems.some((item: Product) => item.id === prod.id);

  const autoshipEl = getElement('.autoship__on-off');
  const countsItemsEl = getElement(`.count__items`);

  if (!autoshipEl || !countsItemsEl) return;

  const autoshipActive: boolean = autoshipEl.classList.contains('autoship__on-off_active') || false;
  const countsItems = Number(countsItemsEl.innerText);

  if (!productExists) {
    cartItems.push({
      ...prod,
      autoshipChecked: autoshipActive,
      autoshipDays: '30',
      counts: countsItems,
    });
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export function updateInfoInLocal(prod: Product) {
  const autoshipCheckbox = getElement(`.prod_${prod.id} .prod__checkbox input`) as HTMLInputElement;
  const autoshipDaysText = getElement(`.prod_${prod.id} .dropdown__text`);
  const autoshipDaysItem = getElements(`.prod_${prod.id} .dropdown__item`);

  const minusButton = getElement(`.prod_${prod.id} .counter__minus`);
  const plusButton = getElement(`.prod_${prod.id} .counter__plus`);
  const counterItems = getElement(`.prod_${prod.id} .counter__items`);

  if (!autoshipCheckbox || !autoshipDaysText || !autoshipDaysItem || !minusButton || !plusButton || !counterItems) return;

  if (autoshipCheckbox) {
    autoshipCheckbox.addEventListener('change', () => {
      updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDaysText.textContent || '30', Number(counterItems.textContent));
    });
  }

  if (autoshipDaysText) {
    autoshipDaysItem.forEach((item) => {
      item.addEventListener('click', (event) => {
        const selectedDay = (event.target as HTMLElement).textContent || '30';
        updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, selectedDay, Number(counterItems.textContent));
      });
    });
  }

  minusButton.addEventListener('click', () => {
    updatePriceDisplay(prod, Number(counterItems.textContent));
    updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDaysText.textContent || '30', Number(counterItems.textContent));

    totalCartPrice();
  });

  plusButton.addEventListener('click', () => {
    updatePriceDisplay(prod, Number(counterItems.textContent));
    updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDaysText.textContent || '30', Number(counterItems.textContent));

    totalCartPrice();
  });
}

function updatePriceDisplay(prod: Product, count: number) {
  const priceDiscount = getDiscountedPrice(prod.price, prod.discount, count);
  const priceTotal = getTotalPrice(prod.price, count);
  const prodPrice = getElement(`.prod_${prod.id} .prod__price`);

  if (!prodPrice) return;

  if (prod.type === 'Sale%') {
    prodPrice.innerHTML = `<span>$${priceTotal}</span> $${priceDiscount}`;
  } else {
    prodPrice.innerText = `$${priceTotal}`;
  }
}

function updateAutoshipInLocalStorage(prodId: string, autoshipChecked: boolean, autoshipDays: string, counts: number) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  const productIndex = cartItems.findIndex((item: Product) => item.id === Number(prodId));

  if (productIndex !== -1) {
    cartItems[productIndex].autoshipChecked = autoshipChecked;
    cartItems[productIndex].autoshipDays = autoshipDays;
    cartItems[productIndex].counts = counts;
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export function loadCartFromLocalStorage() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  if (cartItems.length === 0) {
    empty = true;
    emptyBag(empty);
    return;
  }

  empty = false;
  emptyBag(empty);
  if (!cartContainer) return;
  cartContainer.innerHTML = '';

  cartItems.forEach((prod: ProductLocalStorge) => {
    renderProdCard(prod, prod.autoshipChecked, prod.autoshipDays, prod.counts);
    updateInfoInLocal(prod);
  });
}

export function addProdToCart(prod: Product) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  if (cartItems.length === 0) {
    empty = true;
    emptyBag(empty);
  }

  const productExists = cartItems.some((item: Product) => item.id === prod.id);

  if (!productExists) {
    renderProdCard(prod);
  }

  totalCartPrice();
}

export function addAutoship(prod: Product) {
  if (!prod.disabled_subscribe) return;

  const autoshipCheckbox = getElement(`.prod_${prod.id} .prod__checkbox input`) as HTMLInputElement;
  const autoshipDays = getElement(`.prod_${prod.id} .dropdown__text`);
  const autoshipDaysAddEl = getElement('.autoship__dropdown .dropdown__text');
  if (!autoshipDaysAddEl) return;
  const autoshipDaysAdd = autoshipDaysAddEl.textContent;
  const counterItems = getElement(`.prod_${prod.id} .counter__items`);

  if (!autoshipCheckbox || !autoshipDays || !autoshipDaysAdd || !counterItems) return;

  autoshipCheckbox.checked = true;
  autoshipDays.innerText = autoshipDaysAdd;

  updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDays.textContent || '30', Number(counterItems.textContent));
}

export function removeAutoship(prod: Product) {
  if (!prod.disabled_subscribe) return;

  const autoshipCheckbox = getElement(`.prod_${prod.id} .prod__checkbox input`) as HTMLInputElement;
  const autoshipDays = getElement(`.prod_${prod.id} .dropdown__text`);
  const counterItems = getElement(`.prod_${prod.id} .counter__items`);

  if (!autoshipCheckbox || !autoshipDays || !counterItems) return;
  autoshipCheckbox.checked = false;

  updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDays.textContent || '30', Number(counterItems.textContent));
}

export function addBtn(prod: Product) {
  const autoshipCheckbox = getElement(`.prod_${prod.id} .prod__checkbox input`) as HTMLInputElement;
  const autoshipDaysText = getElement(`.prod_${prod.id} .dropdown__text`);
  const counterItems = getElement(`.prod_${prod.id} .counter__items`);
  const addItems = getElement(`.count__counter .counter__items`);

  let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  if (cartItems.length === 0) {
    empty = true;
    emptyBag(empty);
  }

  const productExists = cartItems.some((item: Product) => item.id === prod.id);

  if (!addItems) return;

  if (!productExists) {
    renderProdCard(prod, false, '30', Number(addItems.innerText));
    totalCartPrice();
    return;
  }

  if (!autoshipCheckbox || !autoshipDaysText || !counterItems) return;

  updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDaysText.textContent || '30', Number(counterItems.textContent) + Number(addItems.innerText));
  loadCartFromLocalStorage();

  totalCartPrice();
}

function emptyBag(isEmpty: boolean) {
  if (!cartContainer) return;
  if (!isEmpty) {
    classManipulator(cartContainer, 'remove', 'empty');
    const emptyText = getElements('.cart__empty');
    emptyText.forEach((el) => el.remove());
  }

  if (isEmpty) {
    const empty = renderElement('p', 'cart__empty');
    empty.innerText = 'Your cart is empty';

    classManipulator(cartContainer, 'add', 'empty');

    cartContainer.appendChild(empty);
  }
}

function totalCartPrice() {
  let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  let total: number = 0;
  let totalProdPrice: string;

  const totalPriceContent = getElement('#total-cart-price');

  if (!totalPriceContent) return;

  if (cartItems?.length === 0) {
    totalPriceContent.innerText = `$0`;
  }

  cartItems.forEach((item: ProductLocalStorge) => {
    if (item.type === 'Sale%') totalProdPrice = getDiscountedPrice(item.price, item.discount, item.counts);
    else totalProdPrice = getTotalPrice(item.price, item.counts);

    total += parseFloat(totalProdPrice.replace(/,/g, '').replace(/\s/g, ''));
  });

  totalPriceContent.innerText = `$${total.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  limitTotalPrice(total);
}

function limitTotalPrice(total: number) {
  const btnWrspper = getElement('.cart__btn');
  if(!btnWrspper) return;

  const btn = getElement('.btn', btnWrspper);
  if (!storedUserInfo || !btn) return;

  if (storedUserInfo.role_type === 'whosale') {
    btn.style.backgroundColor = '#C3BDB6';
    btn.style.pointerEvents = 'none';
    const limitInfo = renderElement('p', 'cart__limit')
    limitInfo.style.marginTop = '15px';
    limitInfo.style.textAlign = 'center';
    limitInfo.style.opacity = '0.5';
    limitInfo.style.fontSize = '14px';
    limitInfo.style.fontWeight = '400';
    limitInfo.innerText = 'Minimum order amount is $700'

    if(!getElement('.cart__limit')){
      btnWrspper.appendChild(limitInfo);
    }

    if (total >= 700) {
      btn.style.backgroundColor = '';
      btn.style.pointerEvents = '';
    }
  }
}
