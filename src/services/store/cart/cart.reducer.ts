import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICart, ICartState } from './cart.types';

const initialState: ICartState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, { payload }: PayloadAction<ICart>) {
      const item = payload;
      const itemExists = state.cartItems.find((i) => i.itemId === item.itemId);

      if (itemExists) {
        itemExists.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }
    },
    removeItemFromCart(state, { payload }: PayloadAction<ICart>) {
      const item = payload;
      const itemExists = state.cartItems.find((i) => i.itemId === item.itemId);

      if (itemExists) {
        itemExists.quantity -= item.quantity;
        if (itemExists.quantity === 0) {
          state.cartItems = state.cartItems.filter((i) => i.itemId !== item.itemId);
        }
      }
    },
    incrementItemQuantity(state, { payload }: PayloadAction<ICart>) {
      const item = payload;
      const itemExists = state.cartItems.find((i) => i.itemId === item.itemId);

      if (itemExists) {
        itemExists.quantity += 1;
      }
    },
    decrementItemQuantity(state, { payload }: PayloadAction<ICart>) {
      const item = payload;
      const itemExists = state.cartItems.find((i) => i.itemId === item.itemId);

      if (itemExists) {
        itemExists.quantity -= 1;
        if (itemExists.quantity === 0) {
          state.cartItems = state.cartItems.filter((i) => i.itemId !== item.itemId);
        }
      }
    },
    setTotalPrice(state, { payload }: PayloadAction<number>) {
      state.totalPrice = payload;
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;

export const {
  addItemToCart,
  removeItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  setTotalPrice,
  clearCart,
} = cartSlice.actions;
