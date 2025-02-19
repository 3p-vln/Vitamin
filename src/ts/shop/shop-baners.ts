import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export async function shopBaners() {
  new Swiper('.shop-baners__swiper', {
    modules: [Navigation, Pagination, Autoplay],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 35,
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 50,
      },
    },
  });

  removeDuplicate();
}

function removeDuplicate() {
  const swiperSlides = document.querySelectorAll('.swiper-slide.swiper-slide-duplicate');
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    swiperSlides.forEach((slide) => {
      slide.remove();
    });
  }
}
