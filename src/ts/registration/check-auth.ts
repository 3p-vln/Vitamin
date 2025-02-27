import Cookies from 'js-cookie';

export function checkAuth() {
  const token = Cookies.get('accessToken');
  const path = window.location.pathname;

//хорошо бы проверить валидность токена

  if (!token && !path.includes('/login.html') && !path.includes('/registration.html')) {
    window.location.href = '/Vitamin/login.html';
    return;
  }


  if (token && (path.includes('/login.html') || path.includes('/registration.html'))) {
      window.location.href = '/Vitamin';

  }else {
    document.body.style.visibility = 'visible';
  }


}