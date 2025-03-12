// import { initHeader } from '../components/header';
import { renderRecCard } from '../components/render-card';
import { unfixBtn } from '../personal-pack/fix-btn';
import { changeName } from '../personal-pack/pack-info';
import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';
import { addRecToCart } from '../personal-pack/add-rec-to-cart.ts';
import { LazyModule, useLoadFunction } from '../components/lazy-load.ts';

const lazyModules: LazyModule[] = [
  { importFn: () => import("../components/header.ts"), selector: ".header" },
];

lazyModules.forEach(({ importFn, selector }) => useLoadFunction(importFn, selector));

document.addEventListener('DOMContentLoaded', async () => {
  // initHeader();
  changeName();
  await renderRecCard('.your-pack__cards', 'white');
  unfixBtn();
  await addRecToCart();
  stop();
});

removeSkeletons();
