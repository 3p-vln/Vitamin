// import { initHeader } from '../components/header.ts';
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
import { openOrdersMobile } from '../profile/order-history/open-orders-mobile.ts';
import { renderValueForm } from '../profile/payment/render-value-form.ts';
import { phoneMask } from '../profile/overview/phone-mask.ts';
import { LazyModule, useLoadFunction } from '../components/lazy-load.ts';

const lazyModules: LazyModule[] = [
  { importFn: () => import("../components/header.ts"), selector: ".header" },
];

lazyModules.forEach(({ importFn, selector }) => useLoadFunction(importFn, selector));

document.addEventListener('DOMContentLoaded', async () => {
  // initHeader();
  checkFillInputs()
  validateChangePassword()

  showActivePartition()

  renderValueForm()
  validateCard()
  checkFillPaymentInputs ()

  const dropdownContainer = getElement('.overview-form__field_custom-select');
  if (!dropdownContainer) return;
  initDropdown(dropdownContainer);
  await renderFormRole()
  unlockSubmit()
  overviewValidete()
  phoneMask()
  renderCardsOrderHistory().then(()=>{
    openOrdersMobile()
  })



});