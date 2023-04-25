import React, { useEffect } from 'react';

import CustomText from '@components/atoms/CustomText/CustomText';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import Spacer from '@components/atoms/Spacer/Spacer';
import CartItem from './molecules/cart-item';

import { useAppDispatch, useAppSelector } from '@services/hooks/redux.hook';
import { setTotalPrice } from '@services/store/cart/cart.reducer';

import { footerShadow } from '@theme/shadows';
import * as Styled from './cart.styled';

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const totalPrice = cart.cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    dispatch(setTotalPrice(totalPrice));
  }, [cart, dispatch]);

  return (
    <Styled.CartContainer>
      {cart.cartItems.length === 0 ? (
        <Styled.EmptyCartContainer>
          <CustomText fontFamily="Roboto-Medium" fontSize={16}>
            Cart is empty
          </CustomText>
        </Styled.EmptyCartContainer>
      ) : (
        <Styled.CartBody>
          {cart.cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </Styled.CartBody>
      )}
      <Styled.CartFooter style={footerShadow}>
        <Styled.CartFooterText>
          <CustomText fontSize={22} fontFamily="Roboto-Medium">
            Total:
          </CustomText>
          <CustomText fontSize={22} fontFamily="Roboto-Medium">
            {cart.totalPrice} uah
          </CustomText>
        </Styled.CartFooterText>
        <Spacer size={16} />
        <CustomButton>CONTINUE</CustomButton>
      </Styled.CartFooter>
    </Styled.CartContainer>
  );
};

export default Cart;
