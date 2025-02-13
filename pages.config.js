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
];

export default pages;
