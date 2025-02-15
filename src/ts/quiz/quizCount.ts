import { getElement, getElements } from '../composables/useCallDom';
import { validateEmailForm, validateNameForm } from './quizValidate';

const countCurrent = getElement('.count__current');
const questions = getElements('.quiz');
const nextQuestionBtns = getElements('#next-btn');
const prevBtn = getElement('.back');

let currentQuestionIndex = 0;

function showQuestion(index: number) {
  questions.forEach((question) => {
    question.classList.remove('active');
  });

  questions[index].classList.add('active');

  if (countCurrent) {
    countCurrent.textContent = (index + 1).toString();
  }
}

function changeQuestion(step: number) {
  const newIndex = currentQuestionIndex + step;

  if (newIndex >= 0 && newIndex < questions.length) {
    currentQuestionIndex = newIndex;
    showQuestion(currentQuestionIndex);
  }
}

export function initQuestions() {
  showQuestion(currentQuestionIndex);

  // validateNameForm();
  // validateEmailForm();

  if (!nextQuestionBtns) {
    return;
  }

  nextQuestionBtns.forEach((button: HTMLElement) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (currentQuestionIndex === 0) {
        console.log(0);
        validateNameForm(() => changeQuestion(1));
        return;
      }
      // if (currentQuestionIndex === 8) {
      //   const formIsValid = validateEmailForm();
      //   if (formIsValid) {
      //     changeQuestion(1);
      //   }

      //   return;
      // }

      // changeQuestion(1);
    });
  });

  if (!prevBtn) {
    return;
  }

  // prevBtn.addEventListener('click', () => changeQuestion(-1));
}
