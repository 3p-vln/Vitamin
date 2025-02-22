import { classManipulator, getElements } from '../composables/useCallDom';

const forms = getElements('.quiz__btns');

export function saveAnswers() {
  forms.forEach((form) => {
    const answers = getElements('.quiz__btn', form);
    console.log(answers);

    answers.forEach((answer) => {
      answer.addEventListener('click', () => {
        answers.forEach((answer) => {
          classManipulator(answer, 'remove', 'quiz__btn_active');
        });
        if (!answer.classList.contains('quiz__btn_active')) classManipulator(answer, 'add', 'quiz__btn_active');
      });
    });
  });
}
