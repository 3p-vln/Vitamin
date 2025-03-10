import { createOrderList } from '../create-order/order-list.ts';
import { initAccordion } from '../create-order/order-accordion.ts';
import { createOrderHeader } from '../create-order/header.ts';
import { initDropdown } from '../components/dropdown.ts';
import { getElement } from '../composables/use-call-dom.ts';
import { ctrateOrder } from '../create-order/successful-validation.ts';
import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';

document.addEventListener('DOMContentLoaded', async () => {
  createOrderList();
  initAccordion();
  createOrderHeader();
  const dropdownContainer = getElement('.deliver-info__subitem_dropdown');
  if (!dropdownContainer) return;
  initDropdown(dropdownContainer);
  await ctrateOrder();
  stop();
});

await removeSkeletons();
