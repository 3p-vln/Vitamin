export function flipFormCard() {
  const card = document.getElementById('auth-card') as HTMLDivElement | null;
  const buttonRegular = document.getElementById('regular-reg') as HTMLButtonElement | null;
  const buttonWholesale = document.getElementById('wholesale-reg') as HTMLButtonElement | null;
  const errorContainer = document.querySelector('.registration-form__error-message');

  if (card && buttonRegular && buttonWholesale) {
    buttonRegular.addEventListener('click', () => {
      buttonWholesale.classList.remove('registration__nav-btn_active');
      buttonRegular.classList.add('registration__nav-btn_active');
      card.classList.add('flipped');

      const regularForm = document.getElementById('regular-registration');
      if (regularForm instanceof HTMLFormElement) {
        regularForm.reset();
      }

      if (errorContainer instanceof HTMLSpanElement) {
        errorContainer.innerText = '';
      }
      const errorLabel = document.querySelectorAll('.just-validate-error-label');
      if (errorLabel) {
        errorLabel.forEach((label) => {
          label.remove();
        });
      }
    });

    buttonWholesale.addEventListener('click', () => {
      buttonWholesale.classList.add('registration__nav-btn_active');
      buttonRegular.classList.remove('registration__nav-btn_active');
      card.classList.remove('flipped');

      const whoForm = document.getElementById('wholesale-registration');
      if (whoForm instanceof HTMLFormElement) {
        whoForm.reset();
      }

      const fileNamePc = document.getElementById('wholesale-registration-file-name');
      if (fileNamePc) {
        fileNamePc.innerHTML = 'Permission';
        fileNamePc.style.opacity = '0.3';
      }

      const fileName = document.getElementById('wholesale-registration-file-description-pc');
      if (fileName) {
        fileName.innerHTML = 'Wholesale purchase permission';
        fileName.style.opacity = '0.3';
      }

      const submitBtn = document.getElementById('wholesale-registration-submit-btn');
      if (submitBtn instanceof HTMLButtonElement) {
        submitBtn.disabled = true;
        submitBtn.classList.add('registration-form__submit_disabled');
      }

      if (errorContainer instanceof HTMLSpanElement) {
        errorContainer.innerText = '';
      }
    });
    const errorLabel = document.querySelectorAll('.just-validate-error-label');
    if (errorLabel) {
      errorLabel.forEach((label) => {
        label.remove();
      });
    }
  }
}
