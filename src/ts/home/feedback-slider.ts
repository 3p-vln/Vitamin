import Swiper from 'swiper';

export function feedbackSlider() {
  new Swiper('.feedback__slider', {
    speed: 400,
    spaceBetween: 32,
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
}