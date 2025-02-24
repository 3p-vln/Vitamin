import { getElement } from '../composables/useCallDom';
import { renderUserName } from '../registration/render-user-name.ts';

const burgerBtn = getElement('.burger__btn');
const menuMain = getElement('.burger__menu.main');
const bagBtn = getElement('.header__bag');
const logoBtn = getElement('.header__logo');
const personalPackBg = getElement('.pack-info__bg_hulf-circle');
const header = getElement('.header');

export function initHeader() {
  if (!menuMain) return;

  const shopBtn = getElement('.menu__item_shop', menuMain);
  const infoBtn = getElement('.menu__item_info', menuMain);
  const profileBtn = getElement('.header__profile', menuMain);
  const shopMenu = getElement('.burger__menu.shop');
  const infoMenu = getElement('.burger__menu.info');
  const profileMenu = getElement('.burger__menu.profile');

  addBgScroll();

  if (burgerBtn && shopBtn && shopMenu && infoBtn && infoMenu && profileBtn && profileMenu) {
    burgerToggle('burger__btn', 'main');
    burgerToggle('menu__item_shop', 'shop');
    burgerToggle('menu__item_info', 'info');
    burgerToggle('header__profile_adapt', 'profile');
    burgerBack('shop__title', 'shop');
    burgerBack('info__title', 'info');
    burgerBack('profile__title', 'profile');
  }
//если есть в localStorage данные о юзере то выведет имя юзера в хедер
  renderUserName()
}

function burgerToggle(clickBtn: string, elActive: string) {
  if (clickBtn) {
    const btn = getElement(`.${clickBtn}`);
    const el = getElement(`.${elActive}`);

    if (btn && el) {
      btn.addEventListener('click', () => {
        if (el.classList.contains('main')) {
          el.classList.toggle(`${elActive}_active`);
          btn.classList.toggle(`${clickBtn}_active`);
          hideBag();
          scrollLock();

          return;
        }
        el.classList.add(`${elActive}_active`);
      });

      return;
    }
    console.log('Кнопка или нужное меню не найдено');
  }
}

function burgerBack(clickBtn: string, elActive: string) {
  if (clickBtn) {
    const btn = getElement(`.${clickBtn} .back-btn`);
    const el = getElement(`.${elActive}`);
    if (btn && el) {
      btn.addEventListener('click', () => {
        el.classList.remove(`${elActive}_active`);
      });

      return;
    }
    console.log('Кнопка или нужное меню не найдено');
  }
}

function hideBag() {
  if (bagBtn && logoBtn && menuMain) {
    if (menuMain.classList.contains('main_active')) {
      logoBtn.style.opacity = '0';
      bagBtn.style.display = 'none';

      if (personalPackBg) personalPackBg.style.display = 'none';

      return;
    }

    if (personalPackBg) personalPackBg.style.display = 'block';
    logoBtn.style.opacity = '1';
    bagBtn.style.display = 'block';
  }
}

function scrollLock() {
  if (!burgerBtn) return;

  const body = getElement('body');

  if (!body) return;
  if (!header) return;

  if (burgerBtn.classList.contains('burger__btn_active')) {
    body.style.overflow = 'hidden';

    return;
  }

  body.style.overflow = 'auto';
  header.style.backgroundColor = 'white';
}

function addBgScroll() {
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'white';
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      header.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.boxShadow = 'none';
    }
  });
}
