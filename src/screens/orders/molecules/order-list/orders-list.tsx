import React, { useState } from 'react';
import { OrdersListProps } from './orders-list.types';
import CustomText from '@components/atoms/CustomText/CustomText';

import * as Styled from './orders-list.styled';
import { itemsShadow } from '@theme/shadows';
import OrderListItem from '@screens/orders/atoms/order-list-item/order-list-item';
import { RefreshControl } from 'react-native-gesture-handler';

const OrdersList: React.FC<OrdersListProps> = ({ orders, onRefresh }) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    onRefresh();
    setRefreshing(false);
  };

  if (!orders.length) {
    return (
      <Styled.OrdersListContainer>
        <Styled.SectionContainer style={itemsShadow}>
          <Styled.OrderListHeader>
            <CustomText fontFamily="Roboto-Medium" fontSize={14}>
              No orders yet
            </CustomText>
          </Styled.OrderListHeader>
        </Styled.SectionContainer>
      </Styled.OrdersListContainer>
    );
  }

  return (
    <Styled.OrdersListContainer
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
      {orders.map((order) => (
        <Styled.SectionContainer style={itemsShadow} key={order.date.toISOString()}>
          <Styled.OrderListHeader>
            <CustomText fontFamily="Roboto-Medium" fontSize={14}>
              {order.date.toLocaleDateString()}
            </CustomText>
          </Styled.OrderListHeader>
          {order.orders.map((item) => (
            <OrderListItem order={item} onPress={() => console.log(123)} key={item.id} />
          ))}
        </Styled.SectionContainer>
      ))}
    </Styled.OrdersListContainer>
  );
};

export default OrdersList;
