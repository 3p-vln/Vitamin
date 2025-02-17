import { initHeader } from '../components/header';
import { changeName } from '../personal-pack/pack-info';

document.addEventListener('DOMContentLoaded', async () => {
  initHeader();
  changeName();
});
