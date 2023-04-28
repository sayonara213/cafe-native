export interface ICart {
  itemId: string;
  isProduct: boolean;
  quantity: number;
  price: number;
}

export interface ICartState {
  cartItems: ICart[];
  totalPrice: number;
}
