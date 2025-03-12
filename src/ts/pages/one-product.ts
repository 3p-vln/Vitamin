// import { initHeader } from '../components/header';
import { renderRecCard } from '../components/render-card';
import { addToCartBtn } from '../one-product/add-to-cart';
import { loadInfo } from '../one-product/load-info';
import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';
import { LazyModule, useLoadFunction } from '../components/lazy-load.ts';

const lazyModules: LazyModule[] = [
  { importFn: () => import("../components/header.ts"), selector: ".header" },
];

lazyModules.forEach(({ importFn, selector }) => useLoadFunction(importFn, selector));

document.addEventListener('DOMContentLoaded', async () => {
  // initHeader();
  await loadInfo();
  await addToCartBtn();
  await renderRecCard('.you-like__cards', 'gray');

  stop();
});

removeSkeletons();