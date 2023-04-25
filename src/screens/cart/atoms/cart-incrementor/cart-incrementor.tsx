import React from 'react';

import { CartIncrementorProps } from './cart-incrementor.types';

import * as Styled from './cart-incrementor.styled';
import CustomText from '@components/atoms/CustomText/CustomText';

const CartIncrementor: React.FC<CartIncrementorProps> = ({ value, onDecrement, onIncrement }) => {
  return (
    <Styled.IncrementorContainer>
      <CustomText onPress={onDecrement} fontSize={20}>
        -
      </CustomText>
      <CustomText>{value}</CustomText>
      <CustomText onPress={onIncrement} fontSize={20}>
        +
      </CustomText>
    </Styled.IncrementorContainer>
  );
};

export default CartIncrementor;
