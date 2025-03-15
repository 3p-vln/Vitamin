export function openOrdersMobile(): void {

  const openButton: NodeListOf<HTMLElement> = document.querySelectorAll('.orderItem__icon');
  const containerOrders: NodeListOf<HTMLElement> = document.querySelectorAll('.orderItem');


  openButton.forEach((item: HTMLElement) => {
    item.addEventListener('click', function(this: HTMLElement): void {

      const orderItem: HTMLElement = this.closest('.orderItem') as HTMLElement;
      const orderBody: HTMLElement = orderItem.querySelector('.orderItem__content') as HTMLElement;


      orderBody.classList.add('orderItem__content_show')

      containerOrders.forEach((item: HTMLElement) => {
        if (item != orderItem) {
          const container = item.querySelector('.orderItem__content') as HTMLElement;
          if (container) {
            container.classList.remove('orderItem__content_show');

          }
        }
      })
    });
  });
}