import { IOrder } from '@typings/types.order';

export interface OrderListItemProps {
  order: IOrder;
  onPress: () => void;
}
