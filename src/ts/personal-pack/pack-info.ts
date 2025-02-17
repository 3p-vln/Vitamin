import { getElement } from '../composables/useCallDom';

const packOwnerSpan = getElement('.pack-info__title span');
const packOwnerName = localStorage.getItem('firstName');

export function changeName() {
  if (packOwnerName && packOwnerSpan) packOwnerSpan.innerText = packOwnerName;
}
