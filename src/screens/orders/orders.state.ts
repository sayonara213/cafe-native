import { API_ROUTES } from '@constants/config';
import { getRequest } from '@services/api.service';
import { useAppSelector } from '@services/hooks/redux.hook';
import { IOrder, IOrderList, OrderStatus } from '@typings/types.order';
import { useState, useEffect } from 'react';

export const useOrdersState = () => {
  const [completedOrders, setCompletedOrders] = useState<IOrderList[]>([]);
  const [inProgressOrders, setInProgressOrders] = useState<IOrderList[]>([]);
  const user = useAppSelector((store) => store.user.user);

  const fetchOrders = async () => {
    const res = (await getRequest(`${API_ROUTES.order.getList}/${user.id}`)) as IOrder[];
    const waitingOrders = res.filter((order: IOrder) => order.status !== OrderStatus.DELIVERED);
    const completedOrders = res.filter(
      (order: IOrder) =>
        order.status === OrderStatus.DELIVERED || order.status === OrderStatus.CANCELED,
    );

    setInProgressOrders(ordersByDate(waitingOrders));
    setCompletedOrders(ordersByDate(completedOrders));
  };

  const sortOrders = (fetchedOrders: IOrder[]) => {
    return fetchedOrders.sort((a: IOrder, b: IOrder) => {
      return new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime();
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const ordersByDate = (fetchedOrders: IOrder[]) => {
    const sortedOrders = sortOrders(fetchedOrders);
    return sortedOrders.reduce((acc: IOrderList[], order: IOrder) => {
      const date = new Date(order.deliveryDate);
      date.setHours(0, 0, 0, 0);
      const dateExists = acc.some((item: IOrderList) => item.date.getTime() === date.getTime());
      if (dateExists) {
        acc.forEach((item: IOrderList) => {
          if (item.date.getTime() === date.getTime()) {
            item.orders.push(order);
          }
        });
      } else {
        acc.push({ date, orders: [order] });
      }
      return acc;
    }, []);
  };

  return {
    completedOrders,
    inProgressOrders,
    fetchOrders,
  };
};
