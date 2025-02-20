import { classManipulator, getElement, getElements } from '../composables/useCallDom';

const dropdown = getElement('.dropdown');
const dropdownBox = getElement('.dropdown__box');
const dropdownActiveItem = getElement('.dropdown__text');
const dropdownList = getElement('.dropdown__list');
const dropdownItems = getElements('.dropdown__item');

export function initDropdown() {
  if (!dropdown) return;

  dropdown.addEventListener('click', (event) => toggleDropdown(event));

  if (!dropdownItems) return;

  dropdownItems.forEach((item) => {
    item.addEventListener('click', () => onItemClick(item));
  });

  document.addEventListener('click', (event) => handleOutsideClick(event));
}

function toggleDropdown(event: Event) {
  event.stopPropagation();

  if (!dropdownBox) return;
  dropdownBox.classList.toggle('dropdown__box_active');

  if (!dropdownList) return;
  dropdownList.classList.toggle('dropdown__list_active');
}

function closeDropdown() {
  if (!dropdownBox) return;
  classManipulator(dropdownBox, 'remove', 'dropdown__box_active');

  if (!dropdownList) return;
  classManipulator(dropdownList, 'remove', 'dropdown__list_active');
}

function onItemClick(item: HTMLElement) {
  const selectedValue = item.textContent;
  if (!selectedValue) return;

  if (!dropdownActiveItem) return;

  dropdownActiveItem.textContent = selectedValue;
  console.log('Setting dropdown text:', selectedValue);

  toggleDropdown(event as Event);
}

function handleOutsideClick(event: MouseEvent) {
  if (dropdown && dropdownList)
    if (!dropdown.contains(event.target as Node) && !dropdownList.contains(event.target as Node)) {
      closeDropdown();
    }
}
