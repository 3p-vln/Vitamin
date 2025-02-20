import { initDropdown } from '../components/dropdown';
import { initHeader } from '../components/header';
import { renderAllCard } from '../components/render-card';
// import { getCatalogList } from '../composables/useApi';
import { shopBaners } from '../shop/shop-baners';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  shopBaners();
  const urlParams = new URLSearchParams(window.location.search);
  const page = parseInt(urlParams.get('page') || '1', 10);
  renderAllCard('.catalog-list__content', page);
  initDropdown();
});
