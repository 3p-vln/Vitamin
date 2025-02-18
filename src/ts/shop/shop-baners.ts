import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export async function shopBaners() {
  new Swiper('.shop-baners__swiper', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: {
      invert: true,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 650px
      651: {
        slidesPerView: 'auto',
        spaceBetween: 35,
      },
      // when window width is >= 1025px
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 50,
      },
    },
  });
}
