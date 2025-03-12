import { initHeader } from '../components/header';
import { renderRecCard } from '../components/render-card';
import { unfixBtn } from '../personal-pack/fix-btn';
import { changeName } from '../personal-pack/pack-info';
import { stop } from '../components/stopPreload.ts';
import { removeSkeletons } from '../components/removeSkeletons.ts';
import { addRecToCart } from '../personal-pack/add-rec-to-cart.ts';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  changeName();
  await renderRecCard('.your-pack__cards', 'white');
  unfixBtn();
  await addRecToCart();
  stop();
});

removeSkeletons();
