import { classManipulator, getElement, renderElement } from '../composables/use-call-dom.ts';
import { Product, ProductLocalStorge } from '../components/interfaces.ts';
import { getDiscountedPrice, getTotalPrice } from '../components/cart.ts';
import { getCatalogItem } from '../composables/use-api.ts';

const orderListCintainer = getElement('.order-list__prods');
const orderListPrice = getElement('.order-list__total');

export function createOrderList() {
  // console.log(orderListCintainer);
  loadCards();
  totalCartPrice();
}

function loadCards() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  if (cartItems.length === 0) {
    return;
  }

  if (!orderListCintainer) return;
  orderListCintainer.innerHTML = '';

  cartItems.forEach((prod: ProductLocalStorge) => {
    renderProd(prod);
  });
}

async function renderProd(prod: ProductLocalStorge) {
  if (!orderListCintainer) return;

  const prodContent = renderElement('div', ['prod', `prod_${prod.id}`]);

  const prodImg = renderElement('div', 'prod__img');

  const prodItem = (await getCatalogItem(`${prod.id}`)) as Product;

  if (prodItem.type === 'Vitamins & Dietary Supplements') {
    classManipulator(prodImg, 'add', 'prod__img_purple');
  }
  if (prodItem.type === 'Minerals') {
    classManipulator(prodImg, 'add', 'prod__img_green-mint');
  }
  if (prodItem.type === 'Prenatal Vitamins') {
    classManipulator(prodImg, 'add', 'prod__img_pink');
  }
  if (prodItem.type === 'Pain Relief') {
    classManipulator(prodImg, 'add', 'prod__img_blue');
  }
  if (prodItem.type === 'Antioxidants') {
    classManipulator(prodImg, 'add', 'prod__img_orange');
  }
  if (prodItem.type === 'Weight Loss') {
    classManipulator(prodImg, 'add', 'prod__img_dark-blue');
  }
  if (prodItem.type === 'Probiotics' || prodItem.type === 'Sale%') {
    classManipulator(prodImg, 'add', 'prod__img_red');
  }

  prodImg.innerHTML = `
    <img src="${prodItem.img}" alt="" />
  `;

  const prodCountAndName = renderElement('div', 'prod__count-and-name');
  prodCountAndName.innerText = `${prod.counts} x ${prodItem.name}`;

  const prodPrice = renderElement('p', 'prod__price');
  const priceDiscount = getDiscountedPrice(prodItem.price, prodItem.discount, prod.counts);
  const priceTotoal = getTotalPrice(prodItem.price, prod.counts);

  if (prodItem.type === 'Sale%') {
    classManipulator(prodPrice, 'add', 'prod__price_sale');
    prodPrice.innerHTML = `<span>$${priceTotoal}</span> $${priceDiscount}`;
  } else {
    prodPrice.innerText = `$${priceTotoal}`;
  }

  prodContent.appendChild(prodImg);
  prodContent.appendChild(prodCountAndName);
  prodContent.appendChild(prodPrice);

  orderListCintainer.appendChild(prodContent);
}

function totalCartPrice() {
  if (!orderListPrice) return;

  let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

  let total: number = 0;
  let totalProdPrice: string;
  let discount: number = 0;

  const subtotalPrice = renderElement('p', 'order-list__subtotal');
  const shoppingPrice = renderElement('p', 'order-list__shopping');
  const discountPrice = renderElement('p', 'order-list__discount');
  const totalPrice = renderElement('p', 'order-list__todays-total');
  const accordionTotalPrice = getElement('.accordion__price');

  if (cartItems?.length === 0) {
    totalPrice.innerHTML = `Today’s Total: <span>$0</span>`;
  }

  cartItems.forEach(async (item: ProductLocalStorge) => {
    try {
      const prodItem = (await getCatalogItem(`${item.id}`)) as Product;
      if (prodItem.type === 'Sale%') {
        totalProdPrice = getDiscountedPrice(prodItem.price, prodItem.discount, item.counts);
        discount += parseFloat(getTotalPrice(prodItem.price, item.counts).replace(/,/g, '').replace(/\s/g, '')) - parseFloat(getDiscountedPrice(prodItem.price, prodItem.discount, item.counts).replace(/,/g, '').replace(/\s/g, ''));
      } else totalProdPrice = getTotalPrice(prodItem.price, item.counts);

      total += parseFloat(totalProdPrice.replace(/,/g, '').replace(/\s/g, ''));

      subtotalPrice.innerHTML = `Subtotal <span>$${total.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</span>`;

      orderListPrice.appendChild(subtotalPrice);

      if (discount !== 0) {
        discountPrice.innerHTML = `Discount <span class="red">-$${discount.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}</span>`;

        orderListPrice.appendChild(discountPrice);
      }

      shoppingPrice.innerHTML = 'Shipping <span>$9.20</span>';
      orderListPrice.appendChild(shoppingPrice);

      total += 9.2;

      totalPrice.innerHTML = `Today’s Total: <span>$${total.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</span>`;

      orderListPrice.appendChild(totalPrice);

      if (!accordionTotalPrice) return;

      accordionTotalPrice.innerText = `$${total.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    } catch (error) {
      console.log(error);
    }
  });
}
