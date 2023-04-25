import { IMenu } from '@typings/types.menu';
import { IProduct } from '@typings/types.products';

export interface MainListItemProps {
  item: IProduct | IMenu;
  index: number;
}
