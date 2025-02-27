import { OrderResponse } from '../components/interfaces';
import { createOrder } from '../composables/useApi';
import { getElement } from '../composables/useCallDom';

const urlParams = new URLSearchParams(window.location.search);
const prodId = Number(urlParams.get('id')) || undefined;

const userInfo = localStorage.getItem('userInfo');

export async function autoshipCreate() {
  const autoship = getElement('.autoship__on-off');
  if (!autoship) return;

  if (userInfo && autoship.classList.contains('autoship__on-off_active')) {
    const uid = JSON.parse(userInfo).user_id;
    if (prodId && uid) {
      try {
        const newOrder = (await createOrder({
          order: [
            {
              product_id: prodId,
              quantity: 1,
            },
          ],
          user_id: uid,
        })) as OrderResponse;

        if (newOrder) console.log(newOrder.data);
      } catch (error) {
        console.error('Error creating order:', error);
      }
    }
  }
}
