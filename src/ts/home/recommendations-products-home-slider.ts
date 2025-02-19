import Swiper from 'swiper';
import 'swiper/css';

export function recommendationsProductsSlider(): void {
  new Swiper('.choose-products__products-slider', {
    speed: 500,
    spaceBetween: 10,
    loop: true,
    slidesPerView: 2,
    breakpoints: {
      // when window width is >= 320px
      576: {
        spaceBetween: 33
      },
    },
  })
}
