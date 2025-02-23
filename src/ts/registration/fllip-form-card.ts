export function flipFormCard(){
  const card = document.getElementById('auth-card') as HTMLDivElement | null;
const buttonRegular = document.getElementById('regular-reg') as HTMLButtonElement | null
const buttonWholesale = document.getElementById('wholesale-reg') as HTMLButtonElement | null

  if(card && buttonRegular && buttonWholesale){

    buttonRegular.addEventListener('click', () => {
      buttonWholesale.classList.remove('registration__nav-btn_active');
      buttonRegular.classList.add('registration__nav-btn_active');
      card.classList.add('flipped');

    });

    buttonWholesale.addEventListener('click', () => {
      buttonWholesale.classList.add('registration__nav-btn_active');
      buttonRegular.classList.remove('registration__nav-btn_active');
      card.classList.remove('flipped');
    });
  }
}