export function unlockSubmit () {
  const form = document.getElementById('overview-form') as HTMLFormElement;

  const inputs = form.querySelectorAll('input');
  const submitButton = document.querySelector('.overview-form__submit-btn') as HTMLButtonElement;

  inputs.forEach(input => {

    input.addEventListener('input', () => {

      if(submitButton){

        submitButton.classList.remove('overview-form__submit-btn_disabled');
        submitButton.disabled = false
      }
    })
  })
}