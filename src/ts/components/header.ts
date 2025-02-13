import { getElement } from '../composables/useCallDom';

class Header {
  burgerBtn: HTMLElement | null;
  menuMain: HTMLElement | null;
  bagBtn: HTMLElement | null;
  logoBtn: HTMLElement | null;

  constructor() {
    this.burgerBtn = getElement('.burger__btn');
    this.bagBtn = getElement('.header__bag');
    this.logoBtn = getElement('.header__logo');
    this.menuMain = getElement('.burger__menu.main');

    this.init();
  }

  init() {
    if (!this.menuMain) {
      return;
    }

    const shopBtn = getElement('.menu__item_shop', this.menuMain);
    const infoBtn = getElement('.menu__item_info', this.menuMain);
    const profileBtn = getElement('.header__profile', this.menuMain);
    const shopMenu = getElement('.burger__menu.shop');
    const infoMenu = getElement('.burger__menu.info');
    const profileMenu = getElement('.burger__menu.profile');

    if (this.menuMain && this.burgerBtn && shopBtn && shopMenu && infoBtn && infoMenu && profileBtn && profileMenu) {
      this.burgerToggle('burger__btn', 'main');
      this.burgerToggle('menu__item_shop', 'shop');
      this.burgerToggle('menu__item_info', 'info');
      this.burgerToggle('header__profile_adapt', 'profile');
      this.burgerBack('shop__title', 'shop');
      this.burgerBack('info__title', 'info');
      this.burgerBack('profile__title', 'profile');
    }
  }

  burgerToggle(clickBtn: string, elActive: string) {
    if (clickBtn) {
      const btn = getElement(`.${clickBtn}`);
      const el = getElement(`.${elActive}`);
      if (btn && el) {
        btn.addEventListener('click', () => {
          if (el.classList.contains('main')) {
            el.classList.toggle(`${elActive}_active`);
            this.hideBag();
            btn.classList.toggle(`${clickBtn}_active`);
          } else {
            el.classList.add(`${elActive}_active`);
          }
        });
      } else {
        console.log('Кнопка или нужное меню не найдено');
      }
    }
  }

  burgerBack(clickBtn: string, elActive: string) {
    if (clickBtn) {
      const btn = getElement(`.${clickBtn} .back-btn`);
      const el = getElement(`.${elActive}`);
      if (btn && el) {
        btn.addEventListener('click', () => {
          el.classList.remove(`${elActive}_active`);
        });
      } else {
        console.log('Кнопка или нужное меню не найдено');
      }
    }
  }

  hideBag() {
    if (this.bagBtn && this.logoBtn && this.menuMain) {
      if (this.menuMain.classList.contains('main_active')) {
        this.logoBtn.style.opacity = '0';
        this.bagBtn.style.display = 'none';
      } else {
        this.logoBtn.style.opacity = '1';
        this.bagBtn.style.display = 'block';
      }
    }
  }
}

export const header = new Header();
