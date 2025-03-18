import { classManipulator, getElement } from '../../composables/use-call-dom.ts';

export function unlockSubmit() {
  const form = document.getElementById('overview-form') as HTMLFormElement;

  const inputs = form.querySelectorAll('input');
  const submitButton = getElement('.overview-form__submit-btn');
  const customDropdown = getElement('#overview-state');

  if (!(submitButton instanceof HTMLButtonElement)) return;
  if (customDropdown) {
    customDropdown.addEventListener('blur', () => {
      if (submitButton) {
        classManipulator(submitButton, 'remove', 'overview-form__submit-btn_disabled');
        submitButton.disabled = false;
      }
    });
  }
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      if (submitButton) {
        classManipulator(submitButton, 'remove', 'overview-form__submit-btn_disabled');
        submitButton.disabled = false;
      }
    });
  });
}
