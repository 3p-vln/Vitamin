import Cookies from 'js-cookie';

export function logout() {
  const logoutButtons = document.querySelectorAll('.sign-out');
  logoutButtons.forEach((logoutButton) => {
    logoutButton.addEventListener('click', () => {
      window.location.href = '/Vitamin';
      localStorage.removeItem('userInfo');
      Cookies.remove('accessToken', { path: '/' });
      Cookies.remove('refreshToken', { path: '/' });
    });
  });
}
