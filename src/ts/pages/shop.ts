import { initDropdown } from '../components/dropdown';
import { initHeader } from '../components/header';
import { shopBaners } from '../shop/shop-baners';
import { filterList } from '../shop/shop-filter';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  shopBaners();
  initDropdown();
  filterList('.catalog-list__content');
});
