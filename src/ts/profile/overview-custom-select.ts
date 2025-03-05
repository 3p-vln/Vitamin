export function overviewCustomSelect(){
// Получаем элементы с явным указанием типов
  const customSelect = document.querySelector('.custom-select') as HTMLElement;
  const selectSelected = customSelect.querySelector('.select-selected') as HTMLElement;
  const selectItems = customSelect.querySelector('.select-items') as HTMLElement;

// Проверяем, что все элементы найдены
  if (!customSelect || !selectSelected || !selectItems) {
    throw new Error('Не удалось найти необходимые элементы DOM');
  }

// Обработчик клика для открытия/закрытия списка
  selectSelected.addEventListener('click', (): void => {
    selectItems.classList.toggle('select-hide');
  });

// Получаем все элементы списка и добавляем обработчики
  const items: NodeListOf<HTMLElement> = selectItems.querySelectorAll('div');
  items.forEach((item: HTMLElement): void => {
    item.addEventListener('click', (): void => {
      selectSelected.textContent = item.textContent;
      selectItems.classList.add('select-hide');
    });
  });

// Закрытие при клике вне элемента
  document.addEventListener('click', (e: MouseEvent): void => {
    const target = e.target as Node;
    if (!customSelect.contains(target)) {
      selectItems.classList.add('select-hide');
    }
  });

}