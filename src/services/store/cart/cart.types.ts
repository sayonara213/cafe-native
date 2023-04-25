export interface ICart {
  id: string;
  isProduct: boolean;
  quantity: number;
  price: number;
}

export interface ICartState {
  cartItems: ICart[];
  totalPrice: number;
}
