import { getElement } from '../composables/useCallDom';

let count = 1;

export async function initCounter(countClass: string | HTMLElement) {
  let counterContainer: HTMLElement | null = null;

  if (typeof countClass === 'string') {
    counterContainer = getElement(countClass);
  } else {
    counterContainer = countClass;
  }

  if (!counterContainer) return;

  const plusBtn = getElement('.counter__plus', counterContainer);
  const minusBtn = getElement('.counter__minus', counterContainer);
  const counterTotal = getElement('.counter__items', counterContainer);

  if (!counterTotal || !plusBtn || !minusBtn) return;

  styleBtns(plusBtn, minusBtn);

  minusBtn.addEventListener('click', () => {
    decrement(counterTotal);
    styleBtns(plusBtn, minusBtn);
  });
  plusBtn.addEventListener('click', () => {
    increment(counterTotal);
    styleBtns(plusBtn, minusBtn);
  });
  updateDisplay(counterTotal);
}

function updateDisplay(counterTotal: HTMLElement) {
  counterTotal.textContent = count.toString();
}

function decrement(counterTotal: HTMLElement) {
  if (count > 1) {
    count--;
    updateDisplay(counterTotal);
  }
}

function increment(counterTotal: HTMLElement) {
  if (count < 999) {
    count++;
    updateDisplay(counterTotal);
  }
}

function styleBtns(plusBtn: HTMLElement, minusBtn: HTMLElement) {
  if (count < 999 && count > 1) {
    plusBtn.style.opacity = '1';
    minusBtn.style.opacity = '1';
  }

  if (count === 999) {
    plusBtn.style.opacity = '0.3';
  }

  if (count === 1) {
    minusBtn.style.opacity = '0.3';
  }
}
