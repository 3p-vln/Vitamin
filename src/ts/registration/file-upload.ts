export function fileUpload() {
  const fileInput = document.getElementById('wholesale-registration-file') as HTMLInputElement | undefined;
  const fileNameSpanPc = document.getElementById('wholesale-registration-file-description-pc') as HTMLSpanElement | undefined;
  const fileNameSpanMobile = document.getElementById('wholesale-registration-file-name') as HTMLSpanElement | undefined;
  const inputFileBtn = document.getElementById('registration-add-file-btn') as HTMLButtonElement | undefined;
  const submitButton = document.getElementById('wholesale-registration-submit-btn') as HTMLButtonElement | undefined;

  if (fileInput) {
    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files.length > 0) {
        if (window.innerWidth >= 567 && fileNameSpanPc) {
          fileNameSpanPc.textContent = fileInput.files[0].name;
        } else {
          fileNameSpanMobile!.textContent = fileInput.files[0].name;
          fileNameSpanMobile!.style.opacity = '1'
        }
      }
    });
  }

  if (inputFileBtn && fileInput) {
    inputFileBtn.addEventListener('click', () => {
      fileInput.click();
    });
  }

  if (fileInput && submitButton) {
    fileInput.addEventListener('change', () => {
      submitButton.classList.remove('registration-form__submit_disabled');
      submitButton.disabled = false;
    });
  }
}
