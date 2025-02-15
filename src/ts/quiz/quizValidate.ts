import JustValidate from 'just-validate';
import { getElement, getElementId } from '../composables/useCallDom';

export function validateNameForm(callback: () => void) {
  const form = getElement('#firstQuestion');
  if (!form) {
    console.log('Form not found!');
    return false;
  }
  console.log('Form found!');

  const validate = new JustValidate('#firstQuestion', {
    errorLabelStyle: {
      color: '#1D1F21',
    },
    focusInvalidField: true,
    lockForm: true,
    validateBeforeSubmitting: true,
  });

  const firstNameField = getElement('#firstName');
  if (!firstNameField) {
    console.log('First name field not found!');
    return false;
  }

  firstNameField.addEventListener('input', (event: any) => {
    console.log(event);
  });
  validate.addField('#firstName', [
    {
      rule: 'required',
      errorMessage: 'Enter your name',
    },
    {
      rule: 'customRegexp',
      value: /^[-\w.]+$/i,
      errorMessage: 'Write correct name',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Write correct name',
    },
  ]);

  validate.onSuccess(() => {
    console.log('Validation passed');
    if (typeof callback === 'function') {
      callback();
    }
  });

  validate.onFail(() => {
    console.log('Validation failed');
  });

  console.log('Starting validation...');
  validate.validate();
}

export function validateEmailForm(): boolean {
  const form = getElementId('emailQuestion');

  const validation = new JustValidate(form, {
    errorFieldCssClass: 'is-invalid',
    successFieldCssClass: 'is-valid',
    focusInvalidField: true,
  });

  validation
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        rule: 'email',
        errorMessage: 'Please enter a valid email address',
      },
    ])
    .onSuccess(() => {
      console.log('Email form is valid, you can submit the data.');
    });

  //   if (form) {
  //     const nextButton = getElement('next-btn', form);

  //     if (!nextButton) return;

  //     nextButton.addEventListener('click', (event) => {
  //       event.preventDefault();
  //       validation.validate();
  //     });
  //   }

  const isValid = validation.validate();
  return isValid;
}
