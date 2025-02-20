import { getCatalogList, getRecommendations } from '../composables/useApi';
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

let currentPage = 1;
const itemsPerPage = 10;
const itemsViewMore = 6;
const windowWidth = window.innerWidth;

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

export async function renderAllCard(container: string, page: number = 1) {
  const prodContainer = getElement(container);
  if (!prodContainer) return;

  const response = (await getCatalogList(page, itemsPerPage)) as RecommendationResponse;

  if (response.errors) {
    return;
  }

  const prodList = response.data;

  // totalProducts = response.data.length;

  await card(prodList, prodContainer, 'gray');

  updatePagination(page, container);

  if (windowWidth < 768) {
    handleViewMoreButtonVisibility();
  }
}

async function card(data: RecommendationData[], container: HTMLElement, colour: string) {
  let cardsToShow = 10;

  if (windowWidth < 768) {
    cardsToShow = 6;
  }

  if (windowWidth < 375) {
    cardsToShow = 4;
  }

  // totalProducts = cardsToShow;

  const productsToRender = data.slice(0, cardsToShow);

  productsToRender.forEach((prodItem) => {
    const card = renderElement('a', ['prod-card', `${prodItem.id}`, `prod-card_${colour}`]);
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
  });
}

function getDiscountedPrice(price: string, discount: number): number {
  const originalPrice = parseFloat(price);
  if (isNaN(originalPrice)) {
    throw new Error('Invalid price format');
  }
  return +(originalPrice * (1 - discount / 100)).toFixed(2);
}

function updatePagination(page: number, container: string) {
  const paginationContainer = getElement('.catalog-list__pagination');
  if (!paginationContainer) return;

  const pages = Math.ceil(100 / itemsPerPage);

  const containerElement = getElement(container);
  if (!containerElement) return;

  paginationContainer.innerHTML = '';

  const prevButton = renderElement('button', ['catalog-list__btn', 'catalog-list__btn_prew']);
  prevButton.innerHTML = `<svg><use href="#back-arrow"></use></svg>`;
  prevButton.onclick = () => handlePageChange(page - 1, containerElement);
  paginationContainer.appendChild(prevButton);

  for (let i = 1; i <= pages; i++) {
    const pageButton = renderElement('button', ['catalog-list__btn', 'catalog-list__btn_page']);

    if (page === i) {
      classManipulator(pageButton, 'add', 'catalog-list__btn_active');
    }

    pageButton.innerText = `${i}`;
    pageButton.onclick = () => handlePageChange(i, containerElement);
    paginationContainer.appendChild(pageButton);
  }

  const nextButton = renderElement('button', ['catalog-list__btn', 'catalog-list__btn_next']);
  nextButton.innerHTML = `<svg><use href="#back-arrow"></use></svg>`;
  nextButton.onclick = () => handlePageChange(page + 1, containerElement);
  paginationContainer.appendChild(nextButton);
}

function handlePageChange(newPage: number, container: HTMLElement) {
  if (newPage < 1 || newPage > Math.ceil(100 / itemsPerPage)) return;
  currentPage = newPage;

  window.history.pushState({}, '', `?page=${newPage}`);

  container.innerHTML = '';

  renderAllCard(`.${container.className}`, currentPage);
}

function handleViewMoreButtonVisibility() {
  const viewMoreButton = getElement('.catalog-list__view-more');
  if (!viewMoreButton) return;

  const totalPages = Math.ceil(20 / itemsViewMore);

  if (currentPage < totalPages) {
    viewMoreButton.style.display = 'flex';
  } else {
    viewMoreButton.style.display = 'none';
  }

  viewMoreButton.onclick = () => {
    if (currentPage < totalPages) {
      currentPage += 1;
      renderAllCard('.catalog-list__content', currentPage);
    }
  };
}
