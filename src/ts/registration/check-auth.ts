import Cookies from 'js-cookie';


  const token = Cookies.get('accessToken');
  const path = window.location.pathname;

  //хорошо бы проверить валидность токена

  if (!token && !path.includes('/login.html') && !path.includes('/registration.html')) {
    window.location.href = '/login.html';
  }

  if (token && (path.includes('/login.html') || path.includes('/registration.html'))) {
    window.location.href = '/Vitamin';
  } else{
    document.body.style.visibility = 'visible';
  }



