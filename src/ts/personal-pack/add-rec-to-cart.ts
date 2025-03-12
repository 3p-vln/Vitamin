import { getElement, getElements } from '../composables/use-call-dom.ts';
import {addAllToCart} from '../components/cart.ts';
// import { getCatalogItem } from '../composables/use-api.ts';
// import { addBtn } from '../components/cart.ts';
// import { Product } from '../components/interfaces.ts';
// import { cartActive } from '../components/cart.ts';

const addAllProdBtn = getElement('.your-pack__continue');

export async function addRecToCart() {
  const cardsItems = getElements('.prod-card');

  if (!addAllProdBtn || !cardsItems) return;

  const cardsId = Array.from(cardsItems).map((card) => card.classList[1]);
  console.log(cardsId);

  addAllProdBtn.addEventListener('click', async () => {
    await addAllToCart(cardsId);
  });
}