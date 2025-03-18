import JustValidate from 'just-validate';
import { changePasswordRequest } from './change-password-request.ts';

interface PasswordForm {
  old_password: string;
  new_password: string;
}

export let validation: any;

export function validateChangePassword() {
  const form = document.getElementById('change-password');

  if (!(form instanceof HTMLFormElement)) return;

  validation = new JustValidate('#change-password');

  validation
    .addField('#old_password', [
      {
        rule: 'required',
        errorMessage: 'Current password is required',
      },
      {
        rule: 'minLength',
        value: 8,
        errorMessage: 'Password must be at least 8 characters',
      },
    ])
    .addField('#new-password', [
      {
        rule: 'required',
        errorMessage: 'New password is required',
      },
      {
        rule: 'minLength',
        value: 8,
        errorMessage: 'Password must be at least 8 characters',
      },
    ])
    .addField('#repeat-new-password', [
      {
        rule: 'required',
        errorMessage: 'Please confirm your new password',
      },
      {
        rule: 'custom',
        validator: (value: string) => {
          const newPassword = document.getElementById('#new-password');

          if (!(newPassword instanceof HTMLInputElement)) return;
          return value === newPassword.value;
        },
        errorMessage: 'Passwords do not match',
      },
    ])

    .onSuccess(() => {
      const newPassword = document.getElementById('#new-password');
      const currentPassword = document.getElementById('#old_password');

      if (newPassword instanceof HTMLInputElement && currentPassword instanceof HTMLInputElement) {
        if (newPassword.value && currentPassword.value) {
          const data: PasswordForm = {
            old_password: currentPassword.value,
            new_password: newPassword.value,
          };
          changePasswordRequest(data);
        }
      }
    });
}
