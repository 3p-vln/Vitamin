import { initDropdown } from '../components/dropdown';
import { initHeader } from '../components/header';
import { feedbackSlider } from '../components/feedback-slider';
import { shopBaners } from '../shop/shop-baners';
import { filterList } from '../shop/shop-filter';
import { getElement } from '../composables/use-call-dom.ts';
import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  await shopBaners();
  const catalog = getElement('.catalog__content');

  if (!catalog) return;

  initDropdown(catalog);
  await filterList('.catalog-list__content');
  feedbackSlider();

  stop();
});

await removeSkeletons();