import { getRecommendations } from '../composables/useApi';
import { classManipulator, getElement, renderElement } from '../composables/useCallDom';

interface RecommendationData {
  id: number;
  name: string;
  price: string;
  img: string;
  discount: number;
  type: string;
}

interface RecommendationResponse {
  data: RecommendationData[];
  errors?: { message: string }[];
}

export async function renderProdCard(container: string) {
  const prodContainer = getElement(container);
  if (!prodContainer) return;

  const response = (await getRecommendations(false)) as RecommendationResponse;

  console.log(response);

  if (response.errors) {
    return;
  }

  const prodList = response.data;

  await card(prodList, prodContainer);
}

async function card(data: RecommendationData[], container: HTMLElement) {
  data.forEach((prodItem) => {
    const card = renderElement('a', ['prod-card', `${prodItem.id}`]);
    const cardContainer = renderElement('div', 'prod-card__content');

    const cardImg = renderElement('div', 'prod-card__img');
    cardImg.innerHTML = `
        <picture>
          <img src="${prodItem.img}" />
        </picture>
      `;

    const cardDiscount = renderElement('div', 'prod-card__discount');
    cardDiscount.innerText = `-${prodItem.discount}%`;

    const cardInfo = renderElement('div', ['prod-card__info', 'info']);
    const category = renderElement('p', 'info__category');

    if (prodItem.type === 'Vitamins & Dietary Supplements') {
      classManipulator(category, 'add', 'info__category_purple');
    }

    if (prodItem.type === 'Minerals') {
      classManipulator(category, 'add', 'info__category_green-mint');
    }

    if (prodItem.type === 'Prenatal Vitamins') {
      classManipulator(category, 'add', 'info__category_purple');
    }

    if (prodItem.type === 'Pain Relief') {
      classManipulator(category, 'add', 'info__category_blue');
    }

    if (prodItem.type === 'Antioxidants') {
      classManipulator(category, 'add', 'info__category_orange');
    }

    if (prodItem.type === 'Weight Loss') {
      classManipulator(category, 'add', 'info__category_dark-blue');
    }

    if (prodItem.type === 'Probiotics') {
      classManipulator(category, 'add', 'info__category_red');
    }

    if (prodItem.type === 'Sale%') {
      classManipulator(category, 'add', 'info__category_red');
    }

    category.innerText = prodItem.type;

    const name = renderElement('p', 'info__name');
    name.innerText = prodItem.name;

    const priceDiscount = getDiscountedPrice(prodItem.price, prodItem.discount);
    const price = renderElement('p', 'info__price');
    if (prodItem.type === 'Sale%') {
      price.innerHTML = `
      <span>$${prodItem.price}</span> $${priceDiscount}
      `;

      classManipulator(price, 'add', 'info__price_sale');
    } else price.innerText = `$${prodItem.price}`;

    cardInfo.appendChild(category);
    cardInfo.appendChild(name);
    cardInfo.appendChild(price);

    cardContainer.appendChild(cardImg);
    if (prodItem.type === 'Sale%') {
      cardContainer.appendChild(cardDiscount);
    }
    cardContainer.appendChild(cardInfo);

    card.appendChild(cardContainer);

    container.appendChild(card);
    console.log(prodItem.id);
  });
}

function getDiscountedPrice(price: string, discount: number): number {
  const originalPrice = parseFloat(price);
  if (isNaN(originalPrice)) {
    throw new Error('Invalid price format');
  }
  return +(originalPrice * (1 - discount / 100)).toFixed(2);
}
