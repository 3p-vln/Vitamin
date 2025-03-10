import { initHeader } from '../components/header';
import { renderRecCard } from '../components/render-card';
import { addToCartBtn } from '../one-product/add-to-cart';
import { loadInfo } from '../one-product/load-info';
import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  await loadInfo();
  await addToCartBtn();
  await renderRecCard('.you-like__cards', 'gray');

  stop();
});

await removeSkeletons();