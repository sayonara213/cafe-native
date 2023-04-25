import { useState } from 'react';

import { API_ROUTES } from '@constants/config';

import { getRequest } from '@services/api.service';

import { IAllergen } from '@typings/types.allergens';
import { IIngredient } from '@typings/types.ingredient';
import { IMenu } from '@typings/types.menu';
import { IProduct } from '@typings/types.products';

export const useGoodsInfoState = (goodId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [goodItem, setGoodItem] = useState<IProduct | IMenu>({} as IProduct | IMenu);
  const [allergens, setAllergens] = useState<string[]>([]);
  const [contains, setContains] = useState<string[]>([]);

  const fetchProduct = async () => {
    const response = await getRequest(`${API_ROUTES.goods.getProduct}/${goodId}`);
    setGoodItem(response);

    getUniqueAllergens(response.ingredients);
    setContains(response.ingredients.map((ingredient: IIngredient) => ingredient.name));

    setIsLoading(false);
  };

  const fetchMenu = async () => {
    const response = await getRequest(`${API_ROUTES.goods.getMenu}/${goodId}`);
    setGoodItem(response);

    setAllergens(response.allergens.map((allergen: IAllergen) => allergen.name));
    setContains(response.products.map((product: IProduct) => product.name));

    setIsLoading(false);
  };

  const getUniqueAllergens = (ingredients: IIngredient[]) => {
    const allergens: string[] = [];
    ingredients.forEach((ingredient) => {
      ingredient.allergens.forEach((allergen) => {
        if (!allergens.includes(allergen.name)) allergens.push(allergen.name);
      });
    });
    setAllergens(allergens);
  };

  return {
    isLoading,
    goodItem,
    allergens,
    contains,
    fetchProduct,
    fetchMenu,
  };
};
