export function checkFillPaymentInputs() {
  const form = document.getElementById('payment-methods-form') as HTMLFormElement;
  const submitButton = document.getElementById('payment-submit-btn') as HTMLButtonElement;
  const inputs = form.querySelectorAll('.card-input') as NodeListOf<HTMLInputElement>;

  // Функция проверки заполненности всех полей
  function checkFormValidity(): void {
    const allFilled = Array.from(inputs).every((input) => input.value.trim() !== '');

    if (allFilled) {
      submitButton.disabled = false;
      submitButton.classList.remove('cards__submit_disabled');
    } else {
      submitButton.disabled = true;
      submitButton.classList.add('cards__submit_disabled');
    }
  }

  // Добавляем слушатели событий на все поля ввода
  inputs.forEach((input) => {
    input.addEventListener('input', checkFormValidity);
  });
}
