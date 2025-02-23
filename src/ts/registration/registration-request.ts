import { RegisterData } from './../components/interfaces';
import { register } from '../composables/useApi.ts';

export async function registrationRequest(data: RegisterData) {
  try {
    const res: any = await register(data);
    console.log(res);
    if (res.statusCode === 201) {
      const res: any = await register(data);
      console.log(res.data);
    }
  } catch (error) {}
}
