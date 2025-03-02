import { addAutoship, addProdToCart, removeAutoship } from '../components/cart';
import { Product } from '../components/interfaces';
import { getCatalogItem } from '../composables/useApi';
import { getElement } from '../composables/useCallDom';

const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get('id') || undefined;

const autoshipBtn = getElement('.autoship__on-off');

export async function autoshipCreate() {
  if (!autoshipBtn) return;

  if (prodId) {
    const prod = (await getCatalogItem(prodId)) as Product;
    addToCart(prod);
  }
}

function addToCart(prod: Product) {
  if (!autoshipBtn) return;

  if (autoshipBtn.classList.contains('autoship__on-off_active')) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

    const productExists = cartItems.some((item: Product) => item.id === prod.id);

    if (!productExists) {
      addProdToCart(prod);
      addAutoship(prod);
      return;
    }

    addAutoship(prod);
    return;
  }

  removeAutoship(prod);
}
