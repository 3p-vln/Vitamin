import { initHeader } from '../components/header';
import { register } from '../composables/useApi';

document.addEventListener('DOMContentLoaded', async () => {
  // console.log(
  //   register({
  //     first_name: 'Test',
  //     last_name: 'Test',
  //     email: 'novkvlaa@gmail.com',
  //     password: 'qwerty123Shjgkg',
  //     role_type: 'regular',
  //   })
  // );

  initHeader();
});
