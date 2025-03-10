import Swiper from 'swiper';
import 'swiper/css';

export function recommendationsProductsSlider(): void {
  new Swiper('.choose-products__products-slider', {
    speed: 500,
    slidesPerView: 'auto',
    loop: true,
    breakpoints: {

    },
  });
}
