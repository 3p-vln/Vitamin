import { addAutoship, addProdToCart, cartActive, removeAutoship } from '../components/cart';
import { Product } from '../components/interfaces';
import { getCatalogItem } from '../composables/use-api.ts';
import { getElement } from '../composables/use-call-dom.ts';

const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get('id') || undefined;

const autoshipBtn = getElement('.autoship__on-off');

export async function autoshipCreate(event: Event) {
  if (!autoshipBtn) return;

  if (prodId) {
    try {
      const prod = await getCatalogItem(prodId);

      if ('errors' in prod) {
        console.error(prod.errors);
        return;
      }

      addToCart(prod, event);
    } catch (error) {
      console.error(error);
    }
  }
}

function addToCart(prod: Product, event: Event) {
  if (!autoshipBtn) return;

  if (autoshipBtn.classList.contains('autoship__on-off_active')) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

    const productExists = cartItems.some((item: Product) => item.id === prod.id);

    if (!productExists) {
      addProdToCart(prod);
      addAutoship(prod);
      cartActive(event);
      return;
    }

    addAutoship(prod);
    cartActive(event);
    return;
  }

  removeAutoship(prod);
}
