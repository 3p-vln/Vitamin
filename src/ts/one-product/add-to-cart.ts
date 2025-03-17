import { cartActive } from '../components/cart/cart.ts';
import { Product } from '../../typings/interfaces.ts';
import { getCatalogItem } from '../composables/use-api.ts';
import { getElement } from '../composables/use-call-dom.ts';
import { addBtn } from '../components/cart/cart-operation.ts';

const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get('id') || undefined;

const addProdBtn = getElement('.add-to-cart__btn');

export default async function addToCartBtn() {
  if (!addProdBtn) return;

  if (prodId) {
    try {
      const prod = await getCatalogItem(prodId);

      if ('errors' in prod) {
        console.error(prod.errors);
        return;
      }

      addToCart(prod);
    } catch (error) {
      console.error(error);
    }
  }
}

function addToCart(prod: Product) {
  if (!addProdBtn) return;
  addProdBtn.addEventListener('click', (event) => {
    addBtn(prod);
    cartActive(event);
  });
}
