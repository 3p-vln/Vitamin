// import { initHeader } from '../components/header';
// import { renderRecCard } from '../components/render-card';
// import { addToCartBtn } from '../one-product/add-to-cart';
// import { loadInfo } from '../one-product/load-info';
import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';
import { lazyImg, LazyModule, useLoadFunction } from '../components/lazy-load.ts';
import { initCart } from '../components/cart.ts';



document.addEventListener('DOMContentLoaded', async () => {
  const lazyModules: LazyModule[] = [
    {
      importFn: () => import("../components/header"),
      selector: ".header"
    },
    {
      importFn: () => import("../one-product/load-info"),
      selector: ".ilustrate"
    },
    {
      importFn: () => import("../one-product/add-to-cart"),
      selector: ".add-to-cart__btn"
    },
    {
      importFn: () => import("../one-product/render-rec-cards"),
      selector: ".you-like"
    },
  ];

  lazyModules.forEach(({ importFn, selector }) => useLoadFunction(importFn, selector));

  await initCart();
  lazyImg();
  stop();
});

removeSkeletons();