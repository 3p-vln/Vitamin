import Cookies from 'js-cookie';

export function logout() {
  const logoutButtons = document.querySelectorAll('.sign-out');
  logoutButtons.forEach((logoutButton) => {
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('userInfo');
      Cookies.remove('accessToken', { path: '/' });
      Cookies.remove('refreshToken', { path: '/' });

      window.location.href = '/Vitamin';
    });
  });
}
