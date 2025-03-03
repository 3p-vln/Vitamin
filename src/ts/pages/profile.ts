import { initHeader } from '../components/header.ts';
import { checkFillInputs } from '../profile/check-fill-inputs.ts';
import { validateChangePassword } from '../profile/validate-change-password.ts';


document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  checkFillInputs()
  validateChangePassword()
});