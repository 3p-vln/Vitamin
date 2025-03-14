export function checkFillInputs() {

  const form = document.getElementById('change-password') as HTMLFormElement;
  const submitButton = form.querySelector('.change-password__submit-btn') as HTMLButtonElement;
  const inputs = form.querySelectorAll('.field__input') as NodeListOf<HTMLInputElement>;


  function checkFormValidity(): void {
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');

    if (allFilled) {
      submitButton.disabled = false;
      submitButton.classList.remove('change-password__submit-btn_disabled');
    } else {
      submitButton.disabled = true;
      submitButton.classList.add('change-password__submit-btn_disabled');
    }
  }


  inputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
  });

}