import { initDropdown } from '../components/dropdown';
import { initHeader } from '../components/header';
import { loadInfo } from '../one-product/load-info';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  await loadInfo();
  initDropdown();
});
