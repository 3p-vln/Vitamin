import { initDropdown } from '../components/dropdown';
// import { initHeader } from '../components/header';
// import { feedbackSlider } from '../components/feedback-slider';
// import { shopBaners } from '../shop/shop-baners';
import { filterList } from '../shop/shop-filter';
import { getElement } from '../composables/use-call-dom.ts';
import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';
import { lazyImg, LazyModule, useLoadFunction } from '../components/lazy-load.ts';

const lazyModules: LazyModule[] = [
  { importFn: () => import("../components/header.ts"), selector: ".header" },
  { importFn: () => import('../components/feedback-slider.ts'),
    selector: '.feedback__slider' },
  { importFn: () => import('../shop/shop-baners'),
    selector: '.shop-baners__swiper' },
];

lazyModules.forEach(({ importFn, selector }) => useLoadFunction(importFn, selector));

document.addEventListener('DOMContentLoaded', async () => {
  // initHeader();
  // await shopBaners();
  const catalog = getElement('.catalog__content');

  if (!catalog) return;

  initDropdown(catalog);
  await filterList('.catalog-list__content');
  // feedbackSlider();

  lazyImg();
  stop();
});

removeSkeletons();