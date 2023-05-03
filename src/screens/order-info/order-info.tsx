import React, { useEffect, useState } from 'react';

import { OrderInfoProps } from './order-info.types';

import { IOrder, OrderStatus } from '@typings/types.order';
import { getRequest, postRequest, putRequest } from '@services/api.service';
import { API_ROUTES } from '@constants/config';
import { useRoute } from '@react-navigation/native';

import * as Styled from '../order-confirmation/order-confirmation.styled';
import CustomText from '@components/atoms/CustomText/CustomText';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import CustomProgressBar from '@screens/order-info/molecules/progress-bar/progress-bar';

import { itemsShadow } from '@theme/shadows';
import StarsRating from './molecules/stars/stars';

const OrderInfo: React.FC = () => {
  const route = useRoute();
  const { orderId } = route.params as OrderInfoProps;

  const [order, setOrder] = useState<IOrder>({} as IOrder);
  const [stars, setStars] = useState<number>(0);

  const fetchOrder = async () => {
    const order = await getRequest(`${API_ROUTES.order.get}/${orderId}`);
    setOrder(order);
  };

  const acceptStars = async () => {
    try {
      putRequest(`${API_ROUTES.order.rate}/${orderId}`, { stars });
    } catch (error) {
      console.log(error);
    }
  };

  const cancelOrder = async () => {
    try {
      putRequest(`${API_ROUTES.order.status}/${orderId}`, { status: OrderStatus.CANCELED });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  useEffect(() => {
    order.stars !== null && setStars(order.stars);
  }, [order.stars]);

  if (!order.id) {
    return null;
  }

  const orderInfoList = [
    {
      title: 'User Information',
      data: [
        {
          title: 'Name',
          value: order.user.name,
        },
        {
          title: 'Phone',
          value: order.user.phone,
        },
        {
          title: 'Address',
          value: order.address.addressName,
        },
      ],
    },
    {
      title: 'Delivery Information',
      data: [
        {
          title: 'Date',
          value: new Date(order.deliveryDate).toLocaleDateString(),
        },
        {
          title: 'Time',
          value: new Date(order.deliveryDate).toLocaleTimeString(),
        },
        {
          title: 'Comment',
          value: order.comment.length > 0 ? order.comment : 'No comment',
        },
      ],
    },
  ];

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
      <Styled.OrderConfirmationFooter style={itemsShadow}>
        {order.status !== OrderStatus.DELIVERED && order.status !== OrderStatus.CANCELED ? (
          <>
            <CustomProgressBar progress={order.status} />
            <CustomButton onPress={cancelOrder}>CANCEL</CustomButton>
          </>
        ) : (
          <>
            <StarsRating stars={stars} setStars={setStars} canBeChanged={order.stars === null} />
            <CustomButton onPress={acceptStars}>SUBMIT</CustomButton>
          </>
        )}
      </Styled.OrderConfirmationFooter>
    </Styled.OrderConfirmationSafeView>
  );
};

export default OrderInfo;
