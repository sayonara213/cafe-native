import { IOrderList } from '@typings/types.order';

export interface OrdersListProps {
  orders: IOrderList[];
  onRefresh: () => void;
}
