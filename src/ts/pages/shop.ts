import { initDropdown } from '../components/dropdown';
import { initHeader } from '../components/header';
import { feedbackSlider } from '../components/feedback-slider';
import { shopBaners } from '../shop/shop-baners';
import { filterList } from '../shop/shop-filter';
import { getElement } from '../composables/useCallDom';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  shopBaners();
  const catalog = getElement('.catalog__content');

  if (!catalog) return;

  initDropdown(catalog);
  filterList('.catalog-list__content');
  feedbackSlider();
});
