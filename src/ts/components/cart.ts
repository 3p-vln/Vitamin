import { classManipulator, getElement, getElements, renderElement } from '../composables/useCallDom';
import { initCounter } from './counter';
import { initDropdown } from './dropdown';
import { Product } from './interfaces';

interface ProductLocalStorge extends Product {
  autoshipChecked: boolean;
  autoshipDays: string;
  counts: number;
}

const cartBtn = getElement('.header__bag');
const cart = getElement('.cart');
const cartCloseBtn = getElement('.cart__close');
const cartBg = getElement('.cart__bg');

let prodList = getElements('.prod');

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

  loadCartFromLocalStorage();

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

export function renderProdCard(prod: Product, autoshipChecked: boolean = false, autoshipDays: string = '30', counts: number = 1) {
  const cartContainer = getElement('.cart__items');

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

  saveProductToLocalStorage(prod);

  prodList = getElements(`.prod_${prod.id}`);
  removeProd(prod.id);

  updateInfoInLocal(prod);
}

function getDiscountedPrice(price: string, discount: number, count: number): string {
  const originalPrice = parseFloat(price);
  if (isNaN(originalPrice)) {
    throw new Error('Invalid price format');
  }

  const discountedPrice = originalPrice * (1 - discount / 100) * count;

  return discountedPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getTotalPrice(price: string, count: number): string {
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

  if (!productExists) {
    cartItems.push({
      ...prod,
      autoshipChecked: true,
      autoshipDays: '30',
      counts: 1,
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

  if (autoshipCheckbox) {
    autoshipCheckbox.addEventListener('change', () => {
      updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDaysText?.textContent || '30', Number(counterItems?.textContent));
    });
  }

  if (autoshipDaysText) {
    autoshipDaysItem.forEach((item) => {
      item.addEventListener('click', (event) => {
        const selectedDay = (event.target as HTMLElement).textContent || '30';
        updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox?.checked, selectedDay, Number(counterItems?.textContent));
      });
    });
  }

  if (!minusButton || !plusButton || !counterItems) return;

  minusButton.addEventListener('click', () => {
    counterItems.textContent = counterItems.textContent;

    updatePriceDisplay(prod, Number(counterItems.textContent));
    updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDaysText?.textContent || '30', Number(counterItems.textContent));
  });

  plusButton.addEventListener('click', () => {
    counterItems.textContent = counterItems.textContent;

    updatePriceDisplay(prod, Number(counterItems.textContent));
    updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDaysText?.textContent || '30', Number(counterItems.textContent));
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

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}

export function loadCartFromLocalStorage() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  cartItems.forEach((prod: ProductLocalStorge) => {
    renderProdCard(prod, prod.autoshipChecked, prod.autoshipDays, prod.counts);
    updateInfoInLocal(prod);
  });
}

export function addProdToCart(prod: Product) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  const productExists = cartItems.some((item: Product) => item.id === prod.id);

  if (!productExists) renderProdCard(prod);
}

export function addAutoship(prod: Product) {
  if (!prod.disabled_subscribe) return;

  const autoshipCheckbox = getElement(`.prod_${prod.id} .prod__checkbox input`) as HTMLInputElement;
  const autoshipDays = getElement(`.prod_${prod.id} .dropdown__text`);
  const autoshipDaysAdd = getElement('.autoship__dropdown .dropdown__text')?.textContent;
  const counterItems = getElement(`.prod_${prod.id} .counter__items`);

  if (autoshipCheckbox && autoshipDays && autoshipDaysAdd) {
    autoshipCheckbox.checked = true;
    autoshipDays.innerText = autoshipDaysAdd;
  }

  updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDays?.textContent || '30', Number(counterItems?.textContent));
}

export function removeAutoship(prod: Product) {
  if (!prod.disabled_subscribe) return;

  const autoshipCheckbox = getElement(`.prod_${prod.id} .prod__checkbox input`) as HTMLInputElement;
  const autoshipDays = getElement(`.prod_${prod.id} .dropdown__text`);
  const counterItems = getElement(`.prod_${prod.id} .counter__items`);

  if (autoshipCheckbox) {
    autoshipCheckbox.checked = false;
  }

  updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDays?.textContent || '30', Number(counterItems?.textContent));
}

export function addBtn(prod: Product) {
  const autoshipCheckbox = getElement(`.prod_${prod.id} .prod__checkbox input`) as HTMLInputElement;
  const autoshipDaysText = getElement(`.prod_${prod.id} .dropdown__text`);
  const counterItems = getElement(`.prod_${prod.id} .counter__items`);
  const addItems = getElement(`.count__counter .counter__items`);

  if (!addItems || !counterItems) return;

  counterItems.innerText = (Number(counterItems.textContent) + Number(addItems.innerText)).toString();

  updateAutoshipInLocalStorage(`${prod.id}`, autoshipCheckbox.checked, autoshipDaysText?.textContent || '30', Number(counterItems.innerText));
}
