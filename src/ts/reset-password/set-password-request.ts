import apiClient from '../registration/api-client.ts';
import { AxiosResponse } from 'axios';


export async function setPasswordRequest(data: { resetToken: string, newPassword: string }) {

  try {
    const res = await apiClient.post(`/auth/set-new-password`, data);
    console.log(res);
    if (res.status === 200) {

      window.location.href = '/Vitamin';
    }
  } catch (error) {
    const errorAxios = error as AxiosResponse;
    console.log(errorAxios);
  }
}