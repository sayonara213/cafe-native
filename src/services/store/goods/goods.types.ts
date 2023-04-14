import { IMenu } from '@typings/types.menu';
import { IProduct } from '@typings/types.products';

export interface MenuListState {
  menuList: IMenu[];
  menuListLoading: boolean;
  menuListError: string | null;

  productList: IProduct[];
  productListLoading: boolean;
  productListError: string | null;

  orderBy: {
    name: string;
    order: 'asc' | 'desc';
  };
  types: string[];
  search: string;
}

export interface FetchGoodsPayload {
  orderBy?: {
    name: string;
    order: 'asc' | 'desc';
  };
  types: string[];
}
