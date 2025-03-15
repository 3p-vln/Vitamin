import { LazyModule, useLoadFunction } from '../components/lazy-load.ts';


document.addEventListener('DOMContentLoaded', async () => {
  const lazyModules: LazyModule[] = [
    {
      importFn: () => import("../components/header"),
      selector: ".header"
    },
  ];

  lazyModules.forEach(({ importFn, selector }) => useLoadFunction(importFn, selector));
});


