import { createOrderList } from '../create-order/order-list.ts';
import { initAccordion } from '../create-order/order-accordion.ts';

document.addEventListener('DOMContentLoaded', async () => {
  createOrderList();
  initAccordion();
});
