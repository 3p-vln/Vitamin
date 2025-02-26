import { validateRegisterForm } from '../login/validate-login-form.ts';
import { checkAuth } from '../registration/check-auth.ts';




document.addEventListener('DOMContentLoaded', async () => {
  validateRegisterForm()
  checkAuth()
});