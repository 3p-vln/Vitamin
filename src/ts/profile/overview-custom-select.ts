export function overviewCustomSelect(){

  const customSelect = document.querySelector('.custom-select') as HTMLElement;
  const selectSelected = customSelect.querySelector('.select-selected') as HTMLElement;
  const selectItems = customSelect.querySelector('.select-items') as HTMLElement;


  if (!customSelect || !selectSelected || !selectItems) {
    throw new Error('Не удалось найти необходимые элементы DOM');
  }


  selectSelected.addEventListener('click', (): void => {
    selectItems.classList.toggle('select-hide');
  });


  const items: NodeListOf<HTMLElement> = selectItems.querySelectorAll('div');
  items.forEach((item: HTMLElement): void => {
    item.addEventListener('click', (): void => {
      selectSelected.textContent = item.textContent;
      selectItems.classList.add('select-hide');
    });
  });


  document.addEventListener('click', (e: MouseEvent): void => {
    const target = e.target as Node;
    if (!customSelect.contains(target)) {
      selectItems.classList.add('select-hide');
    }
  });

}