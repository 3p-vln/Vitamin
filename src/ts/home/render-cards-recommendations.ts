import { getRecommendations } from '../composables/useApi.ts';

interface CardData {
  id: number;
  name: string;
  description: string;
  img: string;
  type: string;
}

interface Response {
  data: CardData[];
}

export async function renderCards(): Promise<void> {
  try {
    const response = (await getRecommendations(true)) as Response;
    if (!response?.data || !Array.isArray(response.data)) {
      console.error('Invalid response format', response);
      return;
    }

    const container = document.getElementById('choose-products-slider');
    if (!container) {
      console.error(`Container with ID "${container}" not found.`);
      return;
    }

    container.innerHTML = '';

    const fragment = document.createDocumentFragment();

    response.data.forEach((item: CardData) => {
      if (!item.name || !item.description) return;

      const card = document.createElement('div');
      card.className = 'swiper-slide choose-products__slide';

      const imgWrapper = document.createElement('div');
      imgWrapper.className = 'choose-products__img-wrapper';

      const img = document.createElement('img');
      img.className = 'choose-products__img';
      img.src = item.img;
      img.alt = item.name;
      img.loading = 'lazy';

      imgWrapper.append(img);

      card.appendChild(imgWrapper);

      const descriptionBlock = document.createElement('div');
      descriptionBlock.className = 'choose-products__description-block';

      const type = document.createElement('div');
      type.className = 'choose-products__type';
      type.textContent = item.type;

      descriptionBlock.appendChild(type);

      const title = document.createElement('div');
      title.className = 'choose-products__product-title';
      title.textContent = item.name;

      descriptionBlock.appendChild(title);

      const description = document.createElement('div');
      description.className = 'choose-products__product-description';
      description.textContent = item.description;

      descriptionBlock.appendChild(description);

      card.appendChild(descriptionBlock);

      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  } catch (error) {
    console.error('Error fetching or rendering cards:', error);
  }
}
