import { initHeader } from '../components/header.ts';
import { checkFillInputs } from '../profile/change-password/check-fill-inputs.ts';
import { validateChangePassword } from '../profile/change-password/validate-change-password.ts';
import { showActivePartition } from '../profile/show-active-partition.ts';
import { validateCard } from '../profile/payment/validate-card.ts';
import { checkFillPaymentInputs } from '../profile/check-fill-payment-inputs.ts';
import { renderFormRole } from '../profile/overview/render-form-role.ts';
import { unlockSubmit } from '../profile/overview/unlock-submit-button.ts';
import { overviewValidete } from '../profile/overview/overview-validete.ts';
import { initDropdown } from '../components/dropdown.ts';
import { getElement } from '../composables/use-call-dom.ts';
import { renderCardsOrderHistory } from '../profile/order-history/render-cards-order-history.ts';



document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  checkFillInputs()
  validateChangePassword()

  showActivePartition()

  validateCard()
  checkFillPaymentInputs ()

  const dropdownContainer = getElement('.overview-form__field_custom-select');
  if (!dropdownContainer) return;
  initDropdown(dropdownContainer);
  await renderFormRole()
  unlockSubmit()
  overviewValidete()
  renderCardsOrderHistory()

});