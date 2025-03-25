import { classManipulator, getElement } from '../composables/use-call-dom.ts';

let timeout: ReturnType<typeof setTimeout>;

export function unfixBtn() {
  const container = getElement('.your-pack');
  const button = getElement('.your-pack__continue');

  if (!container || !button) return;

  window.addEventListener('scroll', () => {
    fixBtn(container, button);
  });

  window.addEventListener('resize', () => {
    fixBtn(container, button);
  });

  fixBtn(container, button);
}

function fixBtn(container: HTMLElement, button: HTMLElement) {
  if (window.innerWidth <= 768) {
    const rect = container.getBoundingClientRect();
    const distanceToBottom = window.innerHeight - rect.bottom;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (distanceToBottom < -150) {
        classManipulator(button, 'add', 'your-pack__continue_fixed');
      } else {
        classManipulator(button, 'remove', 'your-pack__continue_fixed');
      }
    }, 100);

    return;
  }

  classManipulator(button, 'remove', 'your-pack__continue_fixed');
}
