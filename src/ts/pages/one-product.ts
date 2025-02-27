import { initCounter } from '../components/counter';
import { initHeader } from '../components/header';
import { loadInfo } from '../one-product/load-info';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  await loadInfo();
  initCounter('.count__counter');
});
