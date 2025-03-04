export function showActivePartition() {
  const url = new URL(window.location.href);
  const activePartition: string | null  = url.searchParams.get('part') ? url.searchParams.get('part'): 'subscriptions';

  const partitions: NodeListOf<HTMLDivElement> = document.querySelectorAll('.profile-page__partition-item');
  const menuItems: NodeListOf<HTMLElement> = document.querySelectorAll('.profile-page__menu-item');

  if (partitions.length > 0 && activePartition) {
    partitions.forEach((item: HTMLDivElement) => {
      const part: string | null = item.getAttribute('part');

      if (part === activePartition) {
        item.classList.remove('profile-page__partition-item_hidden');
      } else {
        if (!item.classList.contains('profile-page__partition-item_hidden')) {
          item.classList.add('profile-page__partition-item_hidden');
        }
      }
    });
  }

  if (menuItems.length > 0) {
    menuItems.forEach((menuItem) => {
      const itemAttribute = menuItem.getAttribute('part');
      if (activePartition === itemAttribute) {
        menuItem.classList.add('profile-page__menu-item_active');
      } else {
        menuItem.classList.remove('profile-page__menu-item_active');
      }
    });
  }

  const wrapperPage: HTMLDivElement | null = document.querySelector('.wrapper-profile')
  const loader: HTMLDivElement | null = document.querySelector('.profile-loader')

  if (wrapperPage && loader) {
    wrapperPage.style.opacity = '1';
    loader.style.display = 'none';
  }
}
