// import { createOrderList } from '../create-order/order-list.ts';
// import { initAccordion } from '../create-order/order-accordion.ts';
// import { createOrderHeader } from '../create-order/header.ts';
import { initDropdown } from '../components/dropdown.ts';
import { getElement } from '../composables/use-call-dom.ts';
import { ctrateOrder } from '../create-order/successful-validation.ts';
import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';
import { LazyModule, useLoadFunction } from '../components/lazy-load.ts';

const lazyModules: LazyModule[] = [
  {
    importFn: () => import('../create-order/header.ts'),
    selector: '.header',
  },
  {
    importFn: () => import('../create-order/order-list.ts'),
    selector: '.order-list__prods',
  },
  { importFn: () => import('../create-order/order-accordion.ts'), selector: '.accordion' },
];

lazyModules.forEach(({ importFn, selector }) => useLoadFunction(importFn, selector));

document.addEventListener('DOMContentLoaded', async () => {
  // createOrderList();
  // initAccordion();
  // createOrderHeader();
  const dropdownContainer = getElement('.deliver-info__subitem_dropdown');
  if (!dropdownContainer) return;
  initDropdown(dropdownContainer);
  await ctrateOrder();
  stop();
});

removeSkeletons();
