import { initCounter } from '../components/counter';
import { initHeader } from '../components/header';
import { addToCartBtn } from '../one-product/add-to-cart';
import { loadInfo } from '../one-product/load-info';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  await loadInfo();
  initCounter('.count__counter');
  addToCartBtn();
});
