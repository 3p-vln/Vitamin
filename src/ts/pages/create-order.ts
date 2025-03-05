import { createOrderList } from '../create-order/order-list.ts';
import { initAccordion } from '../create-order/order-accordion.ts';
import { createOrderHeader } from '../create-order/header.ts';

document.addEventListener('DOMContentLoaded', async () => {
  createOrderList();
  initAccordion();
  createOrderHeader()
});
