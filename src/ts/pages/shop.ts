import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';
import { lazyImg, LazyModule, useLoadFunction } from '../components/lazy-load.ts';
import { initCart } from '../components/cart.ts';
import { initHeader } from '../components/header.ts';

document.addEventListener('DOMContentLoaded', async () => {
  const lazyModules: LazyModule[] = [
    {
      importFn: () => import('../components/feedback-slider.ts'),
      selector: '.feedback__slider',
    },
    {
      importFn: () => import('../shop/shop-baners'),
      selector: '.shop-baners__swiper',
    },
    {
      importFn: () => import('../shop/shop-filter'),
      selector: '.catalog-list__content',
    },
    {
      importFn: () => import('../shop/filter-dropdown'),
      selector: '.catalog__content',
    },
  ];

  lazyModules.forEach(({ importFn, selector }) => useLoadFunction(importFn, selector));

  initHeader()
  await initCart();
  lazyImg();
  stop();
});

removeSkeletons();
