import { initDropdown } from '../components/dropdown';
import { Product } from '../components/interfaces';
import { getCatalogItem } from '../composables/useApi';
import { classManipulator, getElement } from '../composables/useCallDom';
import { autoshipCreate } from './autoship';
import { initCounter } from '../components/counter.ts';

const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get('id') || undefined;

export async function loadInfo() {
  const autoshipDropdown = getElement('.autoship__dropdown');

  if (!prodId || !autoshipDropdown) return;

  const prod = (await getCatalogItem(prodId)) as Product;

  initCounter('.count__counter');

  showInfo(prod);
  backToShop();
  autoshipBtn(prod);

  initDropdown(autoshipDropdown);
}

function showInfo(prodInfo: Product) {
  if (!prodInfo) return;

  const ilustrate = getElement('.ilustrate');

  if (!ilustrate) return;

  if (prodInfo.type === 'Vitamins & Dietary Supplements') {
    classManipulator(ilustrate, 'add', 'ilustrate_purple');
  }
  if (prodInfo.type === 'Minerals') {
    classManipulator(ilustrate, 'add', 'ilustrate_green-mint');
  }
  if (prodInfo.type === 'Prenatal Vitamins') {
    classManipulator(ilustrate, 'add', 'ilustrate_pink');
  }
  if (prodInfo.type === 'Pain Relief') {
    classManipulator(ilustrate, 'add', 'ilustrate_blue');
  }
  if (prodInfo.type === 'Antioxidants') {
    classManipulator(ilustrate, 'add', 'ilustrate_orange');
  }
  if (prodInfo.type === 'Weight Loss') {
    classManipulator(ilustrate, 'add', 'ilustrate_dark-blue');
  }
  if (prodInfo.type === 'Probiotics' || prodInfo.type === 'Sale%') {
    classManipulator(ilustrate, 'add', 'ilustrate_red');
  }

  const img = getElement('.ilustrate__content img') as HTMLImageElement;
  img.src = prodInfo.img;

  const catgory = getElement('.info__category');
  const svgIco = getElement('.count__svg svg use');

  if (!catgory) return;
  if (!svgIco) return;

  if (prodInfo.type === 'Vitamins & Dietary Supplements') {
    classManipulator(catgory, 'add', 'info__category_purple');
    svgIco.setAttribute('href', '#can');
  }
  if (prodInfo.type === 'Minerals') {
    classManipulator(catgory, 'add', 'info__category_green-mint');
    svgIco.setAttribute('href', '#bottle');
  }
  if (prodInfo.type === 'Prenatal Vitamins') {
    classManipulator(catgory, 'add', 'info__category_pink');
    svgIco.setAttribute('href', '#kit');
  }
  if (prodInfo.type === 'Pain Relief') {
    classManipulator(catgory, 'add', 'info__category_blue');
    svgIco.setAttribute('href', '#box');
  }
  if (prodInfo.type === 'Antioxidants') {
    classManipulator(catgory, 'add', 'info__category_orange');
    svgIco.setAttribute('href', '#can');
  }
  if (prodInfo.type === 'Weight Loss') {
    classManipulator(catgory, 'add', 'info__category_dark-blue');
    svgIco.setAttribute('href', '#bottle');
  }
  if (prodInfo.type === 'Probiotics' || prodInfo.type === 'Sale%') {
    classManipulator(catgory, 'add', 'info__category_red');
    svgIco.setAttribute('href', '#kit');
  }

  catgory.innerText = prodInfo.type;

  const name = getElement('.info__name');
  if (!name) return;
  name.innerText = prodInfo.name;

  const capsules = getElement('.count__capsules span');
  if (!capsules) return;
  capsules.innerText = prodInfo.capsules.toString();

  const mg = getElement('.count__mg span');
  if (!mg) return;
  mg.innerText = prodInfo.weight_mg.toString();

  const autoshipText = getElement('.autoship__text');
  if (!autoshipText) return;

  if (window.innerWidth < 768) {
    autoshipText.innerText = 'Deliver every';
  }

  const priceDiscount = getDiscountedPrice(prodInfo.price, prodInfo.discount);
  const price = getElement('.add-to-cart__price');
  if (!price) return;

  if (prodInfo.type === 'Sale%') {
    classManipulator(price, 'add', 'add-to-cart__price_sale');
    price.innerHTML = `<span><span class="price">$${prodInfo.price}</span> <span class="discount">-${prodInfo.discount}%</span></span> $${priceDiscount}`;
  } else {
    price.innerText = `$${prodInfo.price}`;
  }

  updatePrice(price, prodInfo);

  const description = getElement('.descripton__info');
  if (!description) return;
  description.innerText = prodInfo.description;

  const safetyInf = getElement('.safety .inf');
  if (!safetyInf) return;
  safetyInf.innerText = prodInfo.satefy_information;

  const indications = getElement('.indications .inf');
  if (!indications) return;
  indications.innerText = prodInfo.indications;

  const ingredients = getElement('.ingredients .inf');
  if (!ingredients) return;
  ingredients.innerText = prodInfo.ingradients;

  const directions = getElement('.directions .inf');
  if (!directions) return;
  directions.innerText = prodInfo.directions;

  const legal = getElement('.legal .inf');
  if (!legal) return;
  legal.innerText = prodInfo.legal_disclaimer;
}

function backToShop() {
  const backBtn = getElement('.info__backbtn');

  if (!backBtn) return;

  backBtn.addEventListener('click', () => {
    window.location.href = 'shop.html';
  });
}

function autoshipBtn(prodInfo: Product) {
  const autoship = getElement('.autoship__on-off');
  if (!autoship) return;

  const autoshipCircle = getElement('.autoship__circle', autoship);
  if (!autoshipCircle) return;

  if (prodInfo.disabled_subscribe === true) {
    autoship.addEventListener('click', async (event: Event) => {
      autoship.classList.toggle('autoship__on-off_active');
      autoshipCircle.classList.toggle('autoship__circle_active');

      autoshipCreate(event);
    });
  }
}

function getDiscountedPrice(price: string, discount: number, count: number = 1): string {
  const originalPrice = parseFloat(price);
  if (isNaN(originalPrice)) {
    throw new Error('Invalid price format');
  }

  const discountedPrice = originalPrice * (1 - discount / 100) * count;

  return discountedPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getTotalPrice(price: string, count: number = 1): string {
  const originalPrice = parseFloat(price);
  if (isNaN(originalPrice)) {
    throw new Error('Invalid price format');
  }

  const totalPrice = originalPrice * count;

  return totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function updatePrice(el: HTMLElement, prod: Product) {
  const minusBtn = getElement('.count__minus');
  const plusBtn = getElement('.count__plus');

  if (!el || !plusBtn || !minusBtn) return;

  let count = Number(getElement('.count__items')?.innerText);
  let totalPrice = '';
  let discountPrice = '';

  plusBtn.addEventListener('click', () => {
    count = Number(getElement('.count__items')?.innerText);
    totalPrice = getTotalPrice(prod.price, count);
    discountPrice = getDiscountedPrice(prod.price, prod.discount, count);

    if (prod.type === 'Sale%') {
      el.innerHTML = `<span>$${totalPrice} <span class="discount">-${prod.discount}%</span></span> $${discountPrice}`;
    } else {
      el.innerText = `$${totalPrice}`;
    }
  });

  minusBtn.addEventListener('click', () => {
    count = Number(getElement('.count__items')?.innerText);
    totalPrice = getTotalPrice(prod.price, count);
    discountPrice = getDiscountedPrice(prod.price, prod.discount, count);

    if (prod.type === 'Sale%') {
      el.innerHTML = `<span>$${totalPrice} <span class="discount">-${prod.discount}%</span></span> $${discountPrice}`;
    } else {
      el.innerText = `$${totalPrice}`;
    }
  });
}
