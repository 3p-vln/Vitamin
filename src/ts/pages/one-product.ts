import { initHeader } from '../components/header';
import { renderRecCard } from '../components/render-card';
import { addToCartBtn } from '../one-product/add-to-cart';
import { loadInfo } from '../one-product/load-info';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  await loadInfo();
  addToCartBtn();
  renderRecCard('.you-like__cards', 'gray');
});
