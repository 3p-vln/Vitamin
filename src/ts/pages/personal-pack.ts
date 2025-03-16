import { unfixBtn } from '../personal-pack/fix-btn';
import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';
import { LazyModule, useLoadFunction } from '../components/lazy-load.ts';
import { addRecToCart } from '../personal-pack/add-rec-to-cart.ts';
import { renderRecCard } from '../components/render-card.ts';
import { initCart } from '../components/cart.ts';
import { initHeader } from '../components/header.ts';



document.addEventListener('DOMContentLoaded', async () => {
  const lazyModules: LazyModule[] = [
    {
      importFn: () => import("../personal-pack/pack-info"),
      selector: ".pack-info__title span"
    },
    {
      importFn: () => import("../personal-pack/pack-info"),
      selector: ".pack-info__title span"
    },
  ];

  initHeader()
  await initCart();
  await renderRecCard('.your-pack__cards', 'white');
  await addRecToCart();
  lazyModules.forEach(({ importFn, selector }) => useLoadFunction(importFn, selector));

  unfixBtn();
  stop();
});

removeSkeletons();
