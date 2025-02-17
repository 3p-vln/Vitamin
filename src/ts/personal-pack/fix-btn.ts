import { getElement } from '../composables/useCallDom';

export function unfixBtn() {
  const container = getElement('.your-pack');
  const button = getElement('.your-pack__continue');

  if (!container || !button) return;

  if (window.innerWidth <= 768) {
    window.addEventListener('scroll', () => {
      const containerRect = container.getBoundingClientRect();
      console.log('containerRect.top = ' + containerRect.top);
      console.log('containerRect.bottom = ' + containerRect.bottom);

      if (containerRect.top <= 0 && containerRect.bottom <= 920) {
        button.classList.remove('your-pack__continue_fixed');
        return;
      }
      button.classList.add('your-pack__continue_fixed');
    });
  }
}
