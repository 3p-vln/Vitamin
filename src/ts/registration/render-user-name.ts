export function renderUserName() {

  const headerUserName = document.querySelectorAll('.header__user-name');
  const storedUserInfo = localStorage.getItem('userInfo');

  if (headerUserName && storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);
    headerUserName.forEach((item:Element) => {
      const spanItem = item as HTMLSpanElement; // Приведение типа к HTMLSpanElement
      spanItem .innerText = `${userInfo.first_name} ${userInfo.last_name}`;
    })

  }
}