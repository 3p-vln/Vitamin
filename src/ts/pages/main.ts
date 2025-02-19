import { initHeader } from '../components/header';
import { recommendationsProductsSlider } from '../home/recommendations-products-home-slider.ts';
import { renderCards } from '../home/render-cards-recommendations.ts';


document.addEventListener('DOMContentLoaded', async () => {
  // console.log(
  //   register({
  //     first_name: 'Test',
  //     last_name: 'Test',
  //     email: 'novkvlaa@gmail.com',
  //     password: 'qwerty123Shjgkg',
  //     role_type: 'regular',
  //   })
  // );

  initHeader();
  recommendationsProductsSlider()
  await renderCards()
});
