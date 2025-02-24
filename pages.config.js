import { resolve } from 'path';

const pages = [
  {
    name: 'index',
    path: resolve(__dirname, 'index.html'),
  },
  {
    name: 'quiz',
    path: resolve(__dirname, 'quiz.html'),
  },
  {
    name: 'personal-pack',
    path: resolve(__dirname, 'personal-pack.html'),
  },
  {
    name: 'shop',
    path: resolve(__dirname, 'shop.html'),
  },
  {
    name: 'registration',
    path: resolve(__dirname, 'registration.html'),
  },
];

export default pages;
