interface Product {
  id: number;
  disabled_subscribe: boolean;
  capsules: number;
  description: string;
  directions: string;
  discount: number;
  img: string;
  indications: string;
  ingradients: string;
  legal_disclaimer: string;
  name: string;
  price: string;
  satefy_information: string;
  type: string;
  weight_mg: number;
}

interface Item {
  product: Product;
  quantity: number;
  is_discount: boolean;
  total_sum: number;
}

export interface Order {
  date_created: string;
  items: Item[];
  order_number: string;
}

export interface OrdersHistoryData  {
  orders: Order[];
}