import { IAddress } from '@typings/types.address';

export interface OrderConfirmationProps {
  address: IAddress;
  deliveryDate: string;
  comment: string;
}
