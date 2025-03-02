import apiClient from '../registration/api-client.ts';
import { AxiosError, AxiosResponse } from 'axios';

export async function resetPassword() {

  const url = new URL(window.location.href);
  const messageContainer: HTMLElement | null = document.querySelector('.recover__message')
  const customLoader: HTMLElement | null = document.querySelector('.custom-loader')
const formNewPassword: HTMLElement | null = document.getElementById('reset-password-form')
// Извлекаем параметр 'reset'
  const token = url.searchParams.get('reset');

  if (token && messageContainer) {
   try{
     const res: AxiosResponse = await apiClient.get(`/auth/check-reset-token?token=${token}`);

     if (res.status === 200 && customLoader && formNewPassword) {
       customLoader.style.display='none';
       formNewPassword.style.display='block';
     }

   }catch (error){
     const axiosError = error as AxiosError

     if(customLoader && formNewPassword){
       customLoader.style.display='none';
       messageContainer.style.opacity='1';
     }

     switch (axiosError.status) {
       case 400:
         messageContainer.innerText = `Incorrect reference. The password has not been changed.`
         messageContainer.style.color = 'red'

         break
       case 403:
         messageContainer.innerText = `The time for change has expired. The password has not been changed.`
         messageContainer.style.color = 'red'
         break

       default:
         messageContainer.innerText = `Something went wrong... Try again later.`
         messageContainer.style.color = 'red'
         break
     }
   }

  } else {
    console.error('Токен не найден в URL');
  }
}
