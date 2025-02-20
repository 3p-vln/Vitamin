import { initHeader } from '../components/header';
import { renderRecCard } from '../components/render-card';
import { unfixBtn } from '../personal-pack/fix-btn';
import { changeName } from '../personal-pack/pack-info';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  changeName();
  renderRecCard('.your-pack__cards');
  unfixBtn();
});
