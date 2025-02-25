export interface LogInData {
  email: string;
  password: string;
}

export interface RegisterData extends LogInData {
  first_name: string;
  last_name: string;
  role_type: string;
}

export interface RefreshTokenData {
  refreshToken: string;
}

export interface ResetPasswordData {
  email: string;
}

export interface SetNewPasswordData {
  resetToken: string;
  newPassword: string;
}

export interface OrderData {
  order: [
    {
      product_id: number;
      quantity: number;
    },
  ];
  user_id: string;
}

export interface ProfileUpdateData {
  email: string;
  first_name: string;
  last_name: string;
  address_one: string;
  address_two: string;
  city: string;
  phone: string;
  postal_code: string;
  state_province: string;
}

export interface CardInfoData {
  card_number: string;
  card_cvv: string;
  card_date: string;
}

export interface PasswordData {
  old_password: string;
  new_password: string;
}

export interface RecommendationData {
  id: number;
  name: string;
  price: string;
  img: string;
  discount: number;
  type: string;
}

export interface RecommendationResponse {
  data: RecommendationData[];
  meta: {
    totalItems: number;
    totalPages: number;
  };
  errors?: { message: string }[];
}

export interface CardData {
  id: number;
  name: string;
  description: string;
  img: string;
  type: string;
}

export interface Response {
  data: CardData[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  directions: string;
  disabled_subscribe: boolean;
  discount: number;
  img: string;
  indications: string;
  ingradients: string;
  legal_disclaimer: string;
  price: string;
  satefy_information: string;
  type: string;
  weight_mg: number;
  capsules: number;
}
