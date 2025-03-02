import { addBtn } from '../components/cart';
import { Product } from '../components/interfaces';
import { getCatalogItem } from '../composables/useApi';
import { getElement } from '../composables/useCallDom';

const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get('id') || undefined;

const addProdBtn = getElement('.add-to-cart__btn');

export async function addToCartBtn() {
  if (!addProdBtn) return;

  if (prodId) {
    const prod = (await getCatalogItem(prodId)) as Product;
    addToCart(prod);
  }
}

function addToCart(prod: Product) {
  if (!addProdBtn) return;
  addProdBtn.addEventListener('click', () => {
    addBtn(prod);
  });
}
