import { getCatalogList, getRecommendations } from '../composables/useApi';
import { classManipulator, getElement, renderElement } from '../composables/useCallDom';
import { RecommendationData, RecommendationResponse } from './interfaces';

let currentPage = 1;
let itemsPerPage = 10;
let itemsViewMore = 6;
const windowWidth = window.innerWidth;
let currentCategory: string | undefined = undefined;

export async function renderRecCard(container: string) {
  const prodContainer = getElement(container);
  if (!prodContainer) return;

  const response = (await getRecommendations(false)) as RecommendationResponse;

  if (response.errors) {
    return;
  }

  const prodList = response.data;
  await card(prodList, prodContainer, 'white');
}

function updateItemsPerPage() {
  const newWindowWidth = window.innerWidth;

  if (newWindowWidth < 375) {
    itemsPerPage = 4;
    itemsViewMore = 2;
  } else if (newWindowWidth < 768) {
    itemsPerPage = 6;
    itemsViewMore = 6;
  } else {
    itemsPerPage = 10;
    itemsViewMore = 10;
  }
}

export async function renderAllCard(container: string, page: number = 1, category?: string) {
  updateItemsPerPage();
  const prodContainer = getElement(container);
  if (!prodContainer) return;

  let response: RecommendationResponse = (await getCatalogList(page, itemsPerPage, category)) as RecommendationResponse;

  if (response.errors || response.data.length === 0) {
    prodContainer.innerHTML = '<p>Нет товаров в данной категории</p>';
    return;
  }

  const prodList = response.data;
  await card(prodList, prodContainer, 'gray');

  if (windowWidth >= 768) setupLazyLoading(container, category);
  if (windowWidth < 768) handleViewMoreButtonVisibility(container, category);
}

async function card(data: RecommendationData[], container: HTMLElement, colour: string) {
  data.forEach((prodItem) => {
    const card = renderElement('a', ['prod-card', `${prodItem.id}`, `prod-card_${colour}`]);
    const cardContainer = renderElement('div', 'prod-card__content');

    const cardImg = renderElement('div', 'prod-card__img');
    cardImg.innerHTML = `<picture><img src="${prodItem.img}" /></picture>`;

    const cardDiscount = renderElement('div', 'prod-card__discount');
    cardDiscount.innerText = `-${prodItem.discount}%`;

    const cardInfo = renderElement('div', ['prod-card__info', 'info']);
    const category = renderElement('p', 'info__category');
    applyCategoryClass(prodItem.type, category);

    category.innerText = prodItem.type;

    const name = renderElement('p', 'info__name');
    name.innerText = prodItem.name;

    const priceDiscount = getDiscountedPrice(prodItem.price, prodItem.discount);
    const price = renderElement('p', 'info__price');

    if (prodItem.type === 'Sale%') {
      price.innerHTML = `<span>$${prodItem.price}</span> $${priceDiscount}`;
      classManipulator(price, 'add', 'info__price_sale');
    } else {
      price.innerText = `$${prodItem.price}`;
    }

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
  });
}

function applyCategoryClass(type: string, categoryElement: HTMLElement) {
  const categoryClasses: { [key: string]: string } = {
    'Vitamins & Dietary Supplements': 'info__category_purple',
    Minerals: 'info__category_green-mint',
    'Prenatal Vitamins': 'info__category_purple',
    'Pain Relief': 'info__category_blue',
    Antioxidants: 'info__category_orange',
    'Weight Loss': 'info__category_dark-blue',
    Probiotics: 'info__category_red',
    'Sale%': 'info__category_red',
  };

  if (categoryClasses[type]) {
    classManipulator(categoryElement, 'add', categoryClasses[type]);
  }
}

function getDiscountedPrice(price: string, discount: number): string {
  const originalPrice = parseFloat(price);
  if (isNaN(originalPrice)) {
    throw new Error('Invalid price format');
  }

  const discountedPrice = originalPrice * (1 - discount / 100);

  return discountedPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function setupLazyLoading(container: string, category?: string) {
  const prodContainer = getElement(container);
  if (!prodContainer || prodContainer.children.length === 0) return;

  const observer = new IntersectionObserver(
    async (entries, obs) => {
      const lastCard = entries[0];

      if (lastCard.isIntersecting) {
        obs.disconnect();
        await loadMoreCards(container, category);
        setupLazyLoading(container, category);
      }
    },
    { threshold: 1.0 }
  );

  const lastCardElement = prodContainer.lastElementChild;
  if (lastCardElement) {
    observer.observe(lastCardElement);
  }
}

async function loadMoreCards(container: string, category?: string) {
  const prodContainer = getElement(container);
  if (!prodContainer) return;

  if (category !== currentCategory) {
    currentPage = 1;
    currentCategory = category;
    prodContainer.innerHTML = '';
  } else {
    currentPage++;
  }

  const response: RecommendationResponse = (await getCatalogList(currentPage, itemsViewMore, category)) as RecommendationResponse;

  if (response.errors || response.data.length === 0) {
    return;
  }

  await card(response.data, prodContainer, 'gray');
}

export async function handleViewMoreButtonVisibility(container: string, category?: string) {
  const viewMoreButton = getElement('.catalog-list__view-more');
  if (!viewMoreButton) return;

  currentCategory = category;
  currentPage = 1;

  let totalItemsResponse = await getCatalogList(1, 1, category);

  if (!isRecommendationResponse(totalItemsResponse) || totalItemsResponse.errors) {
    return;
  }

  const totalItems = totalItemsResponse.meta.totalItems;
  const prodContainer = getElement(container);
  if (!prodContainer) return;

  let currentItemCount = prodContainer.children.length;
  let remainingItems = totalItems - currentItemCount;

  viewMoreButton.style.display = remainingItems > 0 ? 'flex' : 'none';

  viewMoreButton.replaceWith(viewMoreButton.cloneNode(true));
  const newViewMoreButton = getElement('.catalog-list__view-more') as HTMLButtonElement;

  newViewMoreButton.addEventListener('click', async () => {
    if (remainingItems > 0) {
      await loadMoreCards(container, currentCategory);
      currentItemCount = prodContainer.children.length;
      remainingItems = totalItems - currentItemCount;

      newViewMoreButton.style.display = remainingItems > 0 ? 'flex' : 'none';
    }
  });
}

function isRecommendationResponse(response: unknown): response is RecommendationResponse {
  return typeof response === 'object' && response !== null && 'data' in response && Array.isArray((response as RecommendationResponse).data);
}
