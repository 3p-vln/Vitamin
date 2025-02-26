import Cookies from 'js-cookie';

export function checkAuth() {
  const token = Cookies.get('accessToken');
  const path = window.location.pathname;



  if (!token && !path.includes('/login.html') && !path.includes('/registration.html')) {
    window.location.href = '/Vitamin/login.html';
    return;
  }


  if (token && (path.includes('/login.html') || path.includes('/registration.html'))) {
    window.location.href = '/Vitamin';
  }
}