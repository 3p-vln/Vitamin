import IMask from 'imask';


export function phoneMask(){
  const phoneInput = document.getElementById('overview-phone') as HTMLInputElement;
  IMask(phoneInput, {
    mask: '+{38} (000)000-00-00', // Маска по умолчанию для России
  });



}