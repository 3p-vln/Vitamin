import { getElement } from '../composables/use-call-dom.ts';
import { validateOrderInfo } from '../create-order/validate-form.ts';

const createBtnMain = getElement('.create-order-form__btn');
const createBtnSub = getElement('.order-list__btn');

export async function ctrateOrder() {
  if (!createBtnMain || !createBtnSub) return;

  createBtnSub.addEventListener('click', () => {
    createBtnMain.click();
  });

  createBtnMain.addEventListener('click', async () => {
    const formValidate = await validateOrderInfo();
    console.log('Form validation result: ', formValidate);
  });
}