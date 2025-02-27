import { getElement } from '../composables/useCallDom';

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

  let count = Number(counterTotal?.innerText);

  if (!counterTotal || !plusBtn || !minusBtn) return;

  styleBtns(plusBtn, minusBtn, count);

  minusBtn.addEventListener('click', () => {
    count = Number(counterTotal?.innerText);
    decrement(counterTotal, count);
    styleBtns(plusBtn, minusBtn, count);
  });
  plusBtn.addEventListener('click', () => {
    count = Number(counterTotal?.innerText);
    increment(counterTotal, count);
    styleBtns(plusBtn, minusBtn, count);
  });

  updateDisplay(counterTotal, count);
}

function updateDisplay(counterTotal: HTMLElement, count: number) {
  counterTotal.textContent = count.toString();
}

function decrement(counterTotal: HTMLElement, count: number) {
  if (count > 1) {
    count--;

    updateDisplay(counterTotal, count);
  }
}

function increment(counterTotal: HTMLElement, count: number) {
  if (count < 999) {
    count++;
    updateDisplay(counterTotal, count);
  }
}

function styleBtns(plusBtn: HTMLElement, minusBtn: HTMLElement, count: number) {
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
