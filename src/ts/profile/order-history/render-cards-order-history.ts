import { getOrderHistory } from '../../composables/use-api.ts';
import { OrdersData } from '../../components/interfaces.ts';
import { getColorCard } from './get-color.ts';
import { addAllToCartOrders, cartActive } from '../../components/cart.ts';

export async function renderCardsOrderHistory() {
  const res = await getOrderHistory();

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
  orderHistoryContainer.innerHTML = '';

  ordersData.orders.forEach((orderItem) => {
    const productsIdAndCounts: { id: string; counts: number }[] = [];

    const orderItemContainer = document.createElement('article');
    orderItemContainer.classList.add('orderItem');

    const orderItemContainerHeader = document.createElement('div');
    orderItemContainerHeader.classList.add('orderItem__header');

    const orderItemContainerHeaderData = document.createElement('div');
    orderItemContainerHeaderData.classList.add('orderItem__data');

    const date = new Date(orderItem.date_created);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const iconRow = document.createElement('img');
    iconRow.classList.add('orderItem__icon');
    iconRow.src = './src/img/profile/Back_arrow.svg';
    iconRow.alt = 'picture';

    const orderItemDate = document.createElement('div');
    orderItemDate.classList.add('orderItem__date');
    orderItemDate.innerText = formattedDate;

    const orderItemId = document.createElement('div');
    orderItemId.classList.add('orderItem__id');
    orderItemId.innerText = `No ${orderItem.order_number}`;

    orderItemContainerHeaderData.appendChild(orderItemDate);

    const orderItemContainerDescription = document.createElement('div');
    orderItemContainerDescription.classList.add('orderItem__description');
    orderItemContainerDescription.innerText = 'Shipping';

    orderItemContainerHeader.appendChild(orderItemContainerHeaderData);
    orderItemContainerHeaderData.appendChild(orderItemContainerDescription);
    orderItemContainer.appendChild(orderItemContainerHeader);
    orderItemContainerHeader.appendChild(iconRow);

    orderItemContainerHeader.appendChild(orderItemId);

    const orderItemBody = document.createElement('div');
    orderItemBody.classList.add('orderItem__body');

    orderItem.items.forEach((item) => {
      productsIdAndCounts.push({
        id: item.product.id,
        counts: item.quantity,
      });

      const card = document.createElement('a');
      card.classList.add('orderItem__card', 'card');
      card.href = `/Vitamin/one-product.html?id=${item.product.id}`;

      const imgBlock = document.createElement('div');
      imgBlock.classList.add('card__img-block');
      imgBlock.classList.add(getColorCard(item.product.type, 'card__img-block'));

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
      cardType.classList.add(getColorCard(item.product.type, 'card__type'));
      cardType.innerText = item.product.type;

      const cardName = document.createElement('div');
      cardName.innerText = `${item.quantity} х ${item.product.name}`;

      const cardPrice = document.createElement('div');
      cardPrice.classList.add('card__price');
      const formattedPrice = item.total_sum.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      cardPrice.innerText = formattedPrice;

      cardBody.appendChild(cardType);
      cardBody.appendChild(cardName);
      cardBody.appendChild(cardPrice);

      card.appendChild(imgBlock);
      card.appendChild(cardBody);
      orderItemBody.appendChild(card);
    });

    const orderItemContent = document.createElement('div');
    orderItemContent.classList.add('orderItem__content');

    orderItemContent.appendChild(orderItemBody);

    const totalOrderSum = orderItem.items.reduce((sum, item) => sum + item.total_sum, 0);
    const formattedTotalSum = totalOrderSum.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const orderItemFooter = document.createElement('div');
    orderItemFooter.classList.add('orderItem__footer');

    const orderItemTotal = document.createElement('div');
    orderItemTotal.classList.add('orderItem__total');
    orderItemTotal.innerHTML = `<span class="orderItem__total-text">Order amount:</span> <span class="orderItem__total-sum">${formattedTotalSum}</span>`;

    const orderItemButton = document.createElement('button');
    orderItemButton.classList.add('orderItem__button', 'btn', 'btn_orange');
    orderItemButton.innerText = 'Add to cart';

    orderItemButton.addEventListener('click', async (event) => {
      await addAllToCartOrders(productsIdAndCounts);
      cartActive(event);
    });

    orderItemFooter.appendChild(orderItemTotal);
    orderItemFooter.appendChild(orderItemButton);

    orderItemContent.appendChild(orderItemFooter);
    orderItemContainer.appendChild(orderItemContent);

    orderHistoryContainer.appendChild(orderItemContainer);
  });
  return Promise.resolve();
}
