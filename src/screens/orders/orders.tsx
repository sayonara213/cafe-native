import { IOrder } from '@typings/types.order';
import React from 'react';
import OrdersList from './molecules/order-list/orders-list';

import * as Styled from './orders.styled';
import { TabsView } from '@screens/main/organisms/tabs-view';
import { useOrdersState } from './orders.state';

export interface IOrderList {
  date: Date;
  orders: IOrder[];
}

const Orders: React.FC = () => {
  const { completedOrders, inProgressOrders, fetchOrders } = useOrdersState();

  const screens = {
    completedOrders: () => <OrdersList orders={completedOrders} onRefresh={fetchOrders} />,
    waitingOrders: () => <OrdersList orders={inProgressOrders} onRefresh={fetchOrders} />,
  };

  const routes = [
    { key: 'waitingOrders', title: 'Waiting' },
    { key: 'completedOrders', title: 'Completed' },
  ];

  return (
    <Styled.OrdersContainer>
      <TabsView screens={screens} routes={routes} isFilter={false} />
    </Styled.OrdersContainer>
  );
};

export default Orders;
