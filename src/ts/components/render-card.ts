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

  const response = (await getRecommendations(true)) as RecommendationResponse;

  console.log(response);

  if (response.errors) {
    return;
  }

  const prodList = response.data;

  // if (Array.isArray(prodList)) {
  //   console.log(prodList);
  // }

  await card(prodList, prodContainer);
}

async function card(data: RecommendationData[], container: HTMLElement) {
  // if (Array.isArray(data)) {
  // console.log(prodList);

  data.forEach((prodItem) => {
    const card = renderElement('a', ['prod-card', `${prodItem.id}`]);
    const cardContainer = renderElement('div', 'prod-card__content');

    const cardImg = renderElement('div', 'prod-card__img');
    cardImg.innerHTML = `
        <picture>
          <img src="${prodItem.img}" />
        </picture>
      `;

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

    category.innerText = prodItem.type;

    const name = renderElement('p', 'info__name');
    name.innerText = prodItem.name;

    const price = renderElement('p', 'info__price');
    price.innerText = `$${prodItem.price}`;

    cardInfo.appendChild(category);
    cardInfo.appendChild(name);
    cardInfo.appendChild(price);

    cardContainer.appendChild(cardImg);
    cardContainer.appendChild(cardInfo);

    card.appendChild(cardContainer);

    container.appendChild(card);
    console.log(prodItem.id);
  });
  // }
}
