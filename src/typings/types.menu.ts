import { IAllergen } from '@typings/types.allergens';
import { IProduct } from '@typings/types.products';

export interface IMenu {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  image: string;
  products: IProduct[];
  allergens: IAllergen[];
}
