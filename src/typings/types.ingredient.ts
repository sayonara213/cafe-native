import { IAllergen } from '@typings/types.allergens';

export interface IIngredient {
  id: string;
  name: string;
  allergens: IAllergen[];
}
