import { useApi } from '../composibles/useApi';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const catalogList = await useApi.getCatalogList();
    console.log('Catalog List:', catalogList);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
