import Cookies from 'js-cookie';

export function authPopUp(){
  const popup: HTMLDialogElement = document.getElementById('authPopup') as HTMLDialogElement;
  const openButton: HTMLButtonElement = document.querySelector('.header__profile') as HTMLButtonElement;
  const token = Cookies.get('accessToken');

  if (openButton) {

    openButton.addEventListener('click',()  => {

      if(token){
        window.location.href = '/Vitamin/profile.html';

      }else{
        popup.show();

      }
    })
  }

  // Функция открытия попапа
  (window as any).showPopup = function(): void {
    popup.show();
  }

  // Закрытие при клике на крестик
  const closeButton: HTMLButtonElement = popup.querySelector('.auth-pop-up__close') as HTMLButtonElement;
  closeButton.addEventListener('click', () => {
    popup.close();
  });

  // Закрытие при клике вне области попапа
  popup.addEventListener('click', (e: MouseEvent) => {
    const container: HTMLElement = popup.querySelector('.auth-pop-up__container') as HTMLElement;
    const target: EventTarget | null = e.target;

    if (target instanceof Node && !container.contains(target)) {
      popup.close();
    }
  });
}