import { unfixBtn } from '../personal-pack/fix-btn';
import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';
import { LazyModule, useLoadFunction } from '../components/lazy-load.ts';



document.addEventListener('DOMContentLoaded', async () => {
  const lazyModules: LazyModule[] = [
    {
      importFn: () => import("../components/header"),
      selector: ".header"
    },
    {
      importFn: () => import("../personal-pack/pack-info"),
      selector: ".pack-info__title span"
    },
    {
      importFn: () => import("../personal-pack/pack-info"),
      selector: ".pack-info__title span"
    },
    {
      importFn: () => import("../personal-pack/render-rec-cards"),
      selector: ".your-pack__cards"
    },
    {
      importFn: () => import("../personal-pack/add-rec-to-cart"),
      selector: ".your-pack__continue"
    },
  ];

  lazyModules.forEach(({ importFn, selector }) => useLoadFunction(importFn, selector));

  unfixBtn();
  stop();
});

removeSkeletons();
