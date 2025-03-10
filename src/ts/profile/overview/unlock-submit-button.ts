export function unlockSubmit () {
  const form = document.getElementById('overview-form') as HTMLFormElement;

  const inputs = form.querySelectorAll('input');
  const submitButton = document.querySelector('.overview-form__submit-btn') as HTMLButtonElement;
  const customDropdown = document.querySelector('#overview-state');

  if(customDropdown){
    customDropdown.addEventListener('blur', ()=>{
      if(submitButton){

        submitButton.classList.remove('overview-form__submit-btn_disabled');
        submitButton.disabled = false
      }
    })
  }
  inputs.forEach(input => {

    input.addEventListener('input', () => {

      if(submitButton){

        submitButton.classList.remove('overview-form__submit-btn_disabled');
        submitButton.disabled = false
      }
    })
  })
}