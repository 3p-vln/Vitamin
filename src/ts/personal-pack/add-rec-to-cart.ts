import { getElement, getElements } from '../composables/use-call-dom.ts';
import { addAllToCart, cartActive } from '../components/cart.ts';

const addAllProdBtn = getElement('.your-pack__continue');

export async function addRecToCart() {
  const cardsItems = getElements('.prod-card');

  if (!addAllProdBtn || !cardsItems) return;

  const cardsId = Array.from(cardsItems).map((card) => card.classList[1]);
  console.log(cardsItems);

  addAllProdBtn.addEventListener('click', async (event) => {
    await addAllToCart(cardsId);
    cartActive(event);
  });
}