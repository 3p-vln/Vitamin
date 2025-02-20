import { renderAllCard, updatePagination } from '../components/render-card';
import { classManipulator, getElement, getElements } from '../composables/useCallDom';

const filterParametrs = getElements('.filter__item');
const dropdownActiveItem = getElement('.dropdown__text');

export async function filterList(container: string) {
  if (!filterParametrs) return;
  if (!dropdownActiveItem) return;

  const urlParams = new URLSearchParams(window.location.search);
  let page = 1;
  let selectedCategory = urlParams.get('category') || undefined;

  filterParametrs.forEach((filter) => {
    const category = filter.innerText.trim();
    console.log(category);

    if ((!selectedCategory && category === 'All categories') || category === selectedCategory) {
      classManipulator(filter, 'add', 'filter__item_active');
      dropdownActiveItem.innerText = category;
    } else {
      classManipulator(filter, 'remove', 'filter__item_active');
    }
  });

  renderAllCard(container, page, selectedCategory);
  updatePagination(page, container);

  filterParametrs.forEach((filter) => {
    filter.addEventListener('click', async () => {
      const category = filter.innerText.trim();
      page = 1;

      if (category === 'All categories') {
        urlParams.delete('category');
        selectedCategory = undefined;
      } else {
        urlParams.set('category', category);
        selectedCategory = category;
      }

      urlParams.set('page', page.toString());
      window.history.pushState({}, '', `?${urlParams.toString()}`);

      console.log(`Фильтрация: ${selectedCategory}`);

      const prodContainer = getElement(container);
      if (prodContainer) {
        prodContainer.innerHTML = '';
      }

      filterParametrs.forEach((item) => {
        classManipulator(item, 'remove', 'filter__item_active');
      });

      classManipulator(filter, 'add', 'filter__item_active');

      await renderAllCard(container, page, selectedCategory);
      updatePagination(page, container);
    });
  });
}
