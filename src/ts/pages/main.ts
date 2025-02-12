import { header } from '../components/header';
import { useApi } from '../composables/useApi';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const catalogList = await useApi.getCatalogList();
    console.log('Catalog List:', catalogList);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  header;
});
