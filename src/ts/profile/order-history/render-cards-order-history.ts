import { getOrderHistory } from '../../composables/use-api.ts';
import { OrdersData } from '../../components/interfaces.ts';

export async function renderCardsOrderHistory() {
  const res = await getOrderHistory();

  // Проверяем наличие ошибок в ответе API
  if ('errors' in res) {
    console.log(res);
    return;
  }

  const ordersData = res as OrdersData;

  // Получаем контейнер для вставки заказов
  const orderHistoryContainer = document.getElementById('orderItems');
  if (!orderHistoryContainer) {
    console.error('Container not found');
    return;
  }
  orderHistoryContainer.innerHTML = ''; // Очищаем контейнер

  // Проходим по каждому заказу
  ordersData.orders.forEach((orderItem) => {
    // Создаем основной контейнер для заказа
    const orderItemContainer = document.createElement('article');
    orderItemContainer.classList.add('orderItem');

    // Создаем и заполняем заголовок заказа (дата, номер, описание)
    const orderItemContainerHeader = document.createElement('div');
    orderItemContainerHeader.classList.add('orderItem__header');

    const orderItemContainerHeaderData = document.createElement('div');
    orderItemContainerHeaderData.classList.add('orderItem__data');

    const date = new Date(orderItem.date_created);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const orderItemDate = document.createElement('div');
    orderItemDate.classList.add('orderItem__date');
    orderItemDate.innerText = formattedDate;

    const orderItemId = document.createElement('div');
    orderItemId.classList.add('orderItem__id');
    orderItemId.innerText = `No ${orderItem.order_number}`;

    orderItemContainerHeaderData.appendChild(orderItemDate);
    orderItemContainerHeaderData.appendChild(orderItemId);

    const orderItemContainerDescription = document.createElement('div');
    orderItemContainerDescription.classList.add('orderItem__description');
    orderItemContainerDescription.innerText = 'Shipping';

    orderItemContainerHeader.appendChild(orderItemContainerHeaderData);
    orderItemContainerHeader.appendChild(orderItemContainerDescription);
    orderItemContainer.appendChild(orderItemContainerHeader);

    // Создаем тело заказа с карточками товаров
    const orderItemBody = document.createElement('div');
    orderItemBody.classList.add('orderItem__body');

    orderItem.items.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('orderItem__card', 'card');

      const imgBlock = document.createElement('div');
      imgBlock.classList.add('card__img-block');
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add('card__img-wrapper');
      const img = document.createElement('img');
      img.classList.add('card__img');
      img.src = item.product.img;
      img.alt = 'Card image';
      imgWrapper.appendChild(img);
      imgBlock.appendChild(imgWrapper);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card__body');

      const cardType = document.createElement('div');
      cardType.classList.add('card__type');
      cardType.innerText = item.product.type;

      const cardName = document.createElement('div');
      cardName.classList.add('card__name');
      cardName.innerText = `${item.quantity} х ${item.product.name}`;

      const cardPrice = document.createElement('div');
      cardPrice.classList.add('card__price');
      const formattedPrice = item.total_sum.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      cardPrice.innerText = formattedPrice;

      cardBody.appendChild(cardType);
      cardBody.appendChild(cardName);
      cardBody.appendChild(cardPrice);

      card.appendChild(imgBlock);
      card.appendChild(cardBody);
      orderItemBody.appendChild(card);
    });

    orderItemContainer.appendChild(orderItemBody);

    // **Добавляем футер перед </article>**
    // Рассчитываем общую сумму заказа
    const totalOrderSum = orderItem.items.reduce((sum, item) => sum + item.total_sum, 0);
    const formattedTotalSum = totalOrderSum.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    // Создаем футер
    const orderItemFooter = document.createElement('div');
    orderItemFooter.classList.add('orderItem__footer');

    const orderItemTotal = document.createElement('div');
    orderItemTotal.classList.add('orderItem__total');
    orderItemTotal.innerHTML = `<span class="orderItem__total-text">Order amount:</span> <span class="orderItem__total-sum">${formattedTotalSum}</span>`;

    const orderItemButton = document.createElement('div');
    orderItemButton.classList.add('orderItem__button', 'btn', 'btn_orange');
    orderItemButton.innerText = 'Add to cart';

    orderItemFooter.appendChild(orderItemTotal);
    orderItemFooter.appendChild(orderItemButton);

    // Добавляем футер в контейнер заказа перед закрытием <article>
    orderItemContainer.appendChild(orderItemFooter);

    // Добавляем заказ в общий контейнер
    orderHistoryContainer.appendChild(orderItemContainer);
  });
}