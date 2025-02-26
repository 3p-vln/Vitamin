import { initCounter } from '../components/counter';
import { initDropdown } from '../components/dropdown';
import { initHeader } from '../components/header';
import { loadInfo } from '../one-product/load-info';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  await loadInfo();
  initDropdown();
  initCounter('.count__counter');
});
