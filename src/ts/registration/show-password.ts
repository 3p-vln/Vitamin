import { getElement } from '../composables/use-call-dom.ts';

export function showPassword() {
  const switchButton = getElement('.field__password-icon');
  const iconOpen = getElement('.field__password-icon-open');
  const iconClose = getElement('.field__password-icon-close');
  const passwordInput = getElement<HTMLInputElement>('.field__input_password');
  console.log(1);

  if (passwordInput && switchButton && iconClose && iconOpen) {
    switchButton.addEventListener('click', () => {
      console.log(3);

      console.log(4);
      const isOpen = switchButton.classList.contains('show');
      if (isOpen) {
        iconOpen.style.opacity = '1';
        iconClose.style.opacity = '0';
        switchButton.classList.remove('show');
        passwordInput.type = 'text';
        return;
      }
      iconOpen.style.opacity = '0';
      iconClose.style.opacity = '1';
      switchButton.classList.add('show');
      passwordInput.type = 'password';
    });
  }
}

export function showPasswordReg() {
  const switchButton = getElement('.field__password-icon-reg');
  const iconOpen = getElement('.field__password-icon-open-reg');
  const iconClose = getElement('.field__password-icon-close-reg');
  const passwordInput = getElement<HTMLInputElement>('.field__input_password-reg');
  console.log(1);

  if (passwordInput && switchButton && iconClose && iconOpen) {
    switchButton.addEventListener('click', () => {
      console.log(3);

      console.log(4);
      const isOpen = switchButton.classList.contains('show');
      if (isOpen) {
        iconOpen.style.opacity = '1';
        iconClose.style.opacity = '0';
        switchButton.classList.remove('show');
        passwordInput.type = 'text';
        return;
      }
      iconOpen.style.opacity = '0';
      iconClose.style.opacity = '1';
      switchButton.classList.add('show');
      passwordInput.type = 'password';
    });
  }
}