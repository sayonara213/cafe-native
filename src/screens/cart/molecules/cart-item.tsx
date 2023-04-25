import React, { useEffect, useState } from 'react';

import { CartItemProps } from './cart-item.types';
import { IProduct } from '@typings/types.products';
import { IMenu } from '@typings/types.menu';
import { getRequest } from '@services/api.service';
import { API_ROUTES } from '@constants/config';

import * as Styled from './cart-item.styled';
import { CustomImage } from '@components/atoms/CustomImage';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import CustomText from '@components/atoms/CustomText/CustomText';
import { useAppDispatch } from '@services/hooks/redux.hook';
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItemFromCart,
} from '@services/store/cart/cart.reducer';
import CartIncrementor from '../atoms/cart-incrementor/cart-incrementor';

import Spacer from '@components/atoms/Spacer/Spacer';

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [fetchedItem, setFetchedItem] = useState<IProduct | IMenu>({} as IProduct | IMenu);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const fetchItem = async () => {
    setIsLoading(true);
    const apiRoute = item.isProduct ? API_ROUTES.goods.getProduct : API_ROUTES.goods.getMenu;
    const good = await getRequest(`${apiRoute}/${item.id}`);
    setFetchedItem(good);
    setIsLoading(false);
  };

  const removeItem = () => {
    dispatch(removeItemFromCart(item));
  };

  const onIncrement = () => {
    dispatch(incrementItemQuantity(item));
  };

  const onDecrement = () => {
    dispatch(decrementItemQuantity(item));
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <Styled.CartItemContainer>
      <Styled.CartTopSection>
        <CustomImage source={{ uri: fetchedItem?.image }} width={70} height={70} />
        <Styled.CartItemSection>
          <CustomText fontSize={18} fontFamily="Roboto-Medium" textAlign="left">
            {fetchedItem?.name}
          </CustomText>
          <Spacer size={8} />
          <CustomText numberOfLines={2} fontSize={16} textAlign="left">
            {fetchedItem?.description}
          </CustomText>
        </Styled.CartItemSection>
        <CartIncrementor
          value={item.quantity}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
      </Styled.CartTopSection>
      <Styled.CartBottomSection>
        <CustomButton type="purple" onPress={removeItem} width={70}>
          REMOVE
        </CustomButton>
        <CustomText fontSize={20} fontFamily="Roboto-Medium" textAlign="left">
          {fetchedItem?.price}uah
        </CustomText>
      </Styled.CartBottomSection>
    </Styled.CartItemContainer>
  );
};

export default CartItem;
