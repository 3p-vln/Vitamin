// import { initHeader } from '../components/header';
// import { recommendationsProductsSlider } from '../home/recommendations-products-home-slider.ts';
// import { renderCards } from '../home/render-cards-recommendations.ts';
// import { feedbackSlider } from '../components/feedback-slider.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';
import { stop } from '../components/stopPreload.ts';
import { LazyModule, useLoadFunction } from '../components/lazy-load.ts';

const lazyModules: LazyModule[] = [
  {
    importFn: () => import('../components/header.ts'),
    selector: '.header',
  },
  {
    importFn: () => import('../home/recommendations-products-home-slider.ts'),
    selector: '.choose-products__products-slider',
  },
  {
    importFn: () => import('../home/render-cards-recommendations.ts'),
    selector: '#choose-products-slider',
  },
  { importFn: () => import('../components/feedback-slider.ts'),
    selector: '.feedback__slider' },
];

lazyModules.forEach(({ importFn, selector }) => useLoadFunction(importFn, selector));

document.addEventListener('DOMContentLoaded', async () => {
  // initHeader();
  // recommendationsProductsSlider();
  // await renderCards();
  // feedbackSlider();
  stop();
});

removeSkeletons();
