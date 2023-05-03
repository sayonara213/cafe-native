import React from 'react';

import { OrderConfirmationProps } from './order-confirmation.types';

import * as Styled from './order-confirmation.styled';
import CustomText from '@components/atoms/CustomText/CustomText';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux.hook';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import { postRequest } from '@services/api.service';
import { API_ROUTES } from '@constants/config';
import { clearCart } from '@services/store/cart/cart.reducer';
import { APP_ROUTES } from '@constants/routes';

const OrderConfirmation: React.FC = () => {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { address, deliveryDate, comment } = route.params as OrderConfirmationProps;

  const user = useAppSelector((state) => state.user.user);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const orderInfoList = [
    {
      title: 'User Information',
      data: [
        {
          title: 'Name',
          value: user.name,
        },
        {
          title: 'Phone',
          value: user.phone,
        },
        {
          title: 'Address',
          value: address.addressName,
        },
      ],
    },
    {
      title: 'Delivery Information',
      data: [
        {
          title: 'Date',
          value: new Date(deliveryDate).toLocaleDateString(),
        },
        {
          title: 'Time',
          value: new Date(deliveryDate).toLocaleTimeString(),
        },
        {
          title: 'Comment',
          value: comment.length > 0 ? comment : 'No comment',
        },
      ],
    },
  ];

  const onSubmit = async () => {
    const itemIds = cart.cartItems.map(({ price, ...item }) => item);
    const order = {
      userId: user.id,
      itemIds: itemIds,
      addressId: address.id,
      deliveryDate: deliveryDate,
      comment: comment,
    };
    try {
      await postRequest(API_ROUTES.order.create, order);
      navigate(APP_ROUTES.main.home as never);
      dispatch(clearCart());
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <Styled.OrderConfirmationSafeView>
      <Styled.OrderConfirmationContainer>
        {orderInfoList.map((orderInfo) => (
          <Styled.OrderConfirmationSection key={orderInfo.title}>
            <CustomText fontSize={24}>{orderInfo.title}</CustomText>
            {orderInfo.data.map((data) => (
              <Styled.OrderConfirmationItem key={data.title}>
                <CustomText fontSize={14} fontFamily="Roboto-Medium">
                  {data.title}
                </CustomText>
                <CustomText fontSize={14}>{data.value}</CustomText>
              </Styled.OrderConfirmationItem>
            ))}
          </Styled.OrderConfirmationSection>
        ))}
      </Styled.OrderConfirmationContainer>
      <Styled.OrderConfirmationTotalWrap>
        <CustomText fontSize={16} fontFamily="Roboto-Medium">
          Total
        </CustomText>
        <CustomText fontSize={16} fontFamily="Roboto-Medium">
          {cart.totalPrice} uah
        </CustomText>
      </Styled.OrderConfirmationTotalWrap>
      <CustomButton onPress={onSubmit}>CONFIRM</CustomButton>
    </Styled.OrderConfirmationSafeView>
  );
};

export default OrderConfirmation;
