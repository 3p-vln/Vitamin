import { getRecommendations } from '../composables/use-api.ts';

export async function renderCards(): Promise<void> {
  try {
    const response = await getRecommendations(false);

    if ('errors' in response) {
      console.error('error', response.errors);

      return;
    }

    if (!response?.data || !Array.isArray(response.data)) {
      console.error('Invalid response format', response);
      return;
    }

    const container: HTMLElement | null = document.getElementById('choose-products-slider');

    if (!container) {
      console.error(`Container with ID "${container}" not found.`);
      return;
    }

    container.innerHTML = '';

    const fragment: DocumentFragment = document.createDocumentFragment();

    response.data.forEach((item) => {
      const card: HTMLElement = document.createElement('div');
      card.className = `swiper-slide choose-products__slide ${getColorCard(item.type)} skeleton`;

      const imgWrapper = document.createElement('div');
      imgWrapper.className = 'choose-products__img-wrapper';

      const img: HTMLPictureElement = document.createElement('picture');
      // img.className = 'choose-products__img';
      img.innerHTML = `
        <source srcset="${item.img.img_webp}" type="image/webp">
        <img class="choose-products__img" src="${item.img.img_default}" alt="prod" width="${item.img.img_width}" height="${item.img.img_height}" loading="lazy" />
      `;
      imgWrapper.append(img);

      card.appendChild(imgWrapper);

      const descriptionBlock: HTMLElement = document.createElement('div');
      descriptionBlock.className = 'choose-products__description-block';

      const type: HTMLDivElement = document.createElement('div');
      type.className = 'choose-products__type';
      type.textContent = item.type;
      descriptionBlock.appendChild(type);

      const title: HTMLDivElement = document.createElement('div');
      title.className = 'choose-products__product-title';
      title.textContent = item.name;
      descriptionBlock.appendChild(title);

      const description: HTMLDivElement = document.createElement('div');
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

function getColorCard(type: string): string {
  let result: string;
  switch (type) {
    case 'Probiotics':
      result = 'redBg';
      break;

    case 'Weight Loss':
      result = 'darkBlueBg';
      break;

    case 'Antioxidants':
      result = 'orangeBg';
      break;

    case 'Pain Relief':
      result = 'blueBg';
      break;

    case 'Prenatal Vitamins':
      result = 'pinkBg';
      break;

    case 'Minerals':
      result = 'greenMintBg';
      break;

    case 'Vitamins & Dietary Supplements':
      result = 'purpleBg';
      break;

    default:
      result = 'redBg';
  }
  return `choose-products__slide_${result}`;
}
