import { fileUpload } from '../registration/file-upload.ts';
import { flipFormCard } from '../registration/fllip-form-card.ts';
import { validateRegularForm, validateWholesaleForm } from '../registration/validate-registration-forms.ts';





document.addEventListener('DOMContentLoaded', async () => {

  fileUpload()
  flipFormCard()
  validateRegularForm()
  validateWholesaleForm()

});