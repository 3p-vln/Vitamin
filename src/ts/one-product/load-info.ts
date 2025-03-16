import { initDropdown } from '../components/dropdown';
import { Product } from '../components/interfaces';
import { getCatalogItem } from '../composables/use-api.ts';
import { classManipulator, getElement } from '../composables/use-call-dom.ts';
import { autoshipCreate } from './autoship';
import { initCounter } from '../components/counter.ts';

const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get('id') || undefined;

export default async function loadInfo() {
  const autoshipDropdown = getElement('.autoship__dropdown');

  if (!prodId || !autoshipDropdown) return;

  try {
    const prod = await getCatalogItem(prodId);

    if ('errors' in prod) {
      console.error(prod.errors);
      return;
    }

    initCounter('.count__counter');

    showInfo(prod);
    backToShop();
    autoshipBtn(prod);

    initDropdown(autoshipDropdown);
  } catch (error) {
    console.error(error);
  }
}

function showInfo(prodInfo: Product) {
  const ilustrate = getElement('.ilustrate');
  const catgory = getElement('.info__category');
  const svgIco = getElement('.count__svg svg use');
  const name = getElement('.info__name');
  const capsules = getElement('.count__capsules span');
  const mg = getElement('.count__mg span');
  const autoshipText = getElement('.autoship__text');
  const price = getElement('.add-to-cart__price');
  const description = getElement('.descripton__info');
  const safetyInf = getElement('.safety .inf');
  const indications = getElement('.indications .inf');
  const ingredients = getElement('.ingredients .inf');
  const directions = getElement('.directions .inf');
  const legal = getElement('.legal .inf');

  if (!prodInfo || !ilustrate || !catgory || !svgIco || !name || !capsules || !mg || !autoshipText || !price || !description || !safetyInf || !indications || !ingredients || !directions || !legal) return;

  console.log('prodInfo', prodInfo);
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

  const img = getElement('.ilustrate__content');
  if (!img) return;
  img.innerHTML =  `
     <picture>
        <source srcset="${prodInfo.img.img_webp}" type="image/webp">
        <img src="${prodInfo.img.img_default}" alt="prod" width="${prodInfo.img.img_width}" height="${prodInfo.img.img_height}" loading="lazy"/>
     </picture>`;


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
  name.innerText = prodInfo.name;
  capsules.innerText = prodInfo.capsules.toString();
  mg.innerText = prodInfo.weight_mg.toString();

  if (window.innerWidth < 768) {
    autoshipText.innerText = 'Deliver every';
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      autoshipText.innerText = 'Deliver every';
    }
    if (window.innerWidth >= 768) {
      autoshipText.innerText = 'Autoship this item every';
    }
  });

  const priceDiscount = getDiscountedPrice(prodInfo.price, prodInfo.discount);

  if (prodInfo.type === 'Sale%') {
    classManipulator(price, 'add', 'add-to-cart__price_sale');
    price.innerHTML = `<span><span class="price">$${prodInfo.price}</span> <span class="discount">-${prodInfo.discount}%</span></span> $${priceDiscount}`;
  } else {
    price.innerText = `$${prodInfo.price}`;
  }

  updatePrice(price, prodInfo);

  description.innerText = prodInfo.description;
  safetyInf.innerText = prodInfo.satefy_information;
  indications.innerText = prodInfo.indications;
  ingredients.innerText = prodInfo.ingradients;
  directions.innerText = prodInfo.directions;
  legal.innerText = prodInfo.legal_disclaimer;
}

function backToShop() {
  const backBtn = getElement('.info__backbtn');

  if (!backBtn) return;

  backBtn.addEventListener('click', () => {
    window.location.href = '/Vitamin/shop.html';
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
  const countEl = getElement('.count__items');

  if (!el || !plusBtn || !minusBtn || !countEl) return;

  let count = Number(countEl.innerText);
  let totalPrice = '';
  let discountPrice = '';

  plusBtn.addEventListener('click', () => {
    plusMunusEvent(count, countEl, totalPrice, discountPrice, el, prod);
  });

  minusBtn.addEventListener('click', () => {
    plusMunusEvent(count, countEl, totalPrice, discountPrice, el, prod);
  });
}

function plusMunusEvent(count: number, countEl: HTMLElement, totalPrice: string, discountPrice: string, el: HTMLElement, prod: Product) {
  count = Number(countEl.innerText);
  totalPrice = getTotalPrice(prod.price, count);
  discountPrice = getDiscountedPrice(prod.price, prod.discount, count);

  if (prod.type === 'Sale%') {
    el.innerHTML = `<span>$${totalPrice} <span class="discount">-${prod.discount}%</span></span> $${discountPrice}`;
  } else {
    el.innerText = `$${totalPrice}`;
  }
}
