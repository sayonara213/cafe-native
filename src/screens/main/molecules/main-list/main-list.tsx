import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { getRequest } from '@services/api.service';
import { IProduct } from '@typings/types.products';

import MainListItem from '@screens/main/atoms/main-list-item/main-list-item';
import { ListRenderItem } from 'react-native/types';
import { IMenu } from '@typings/types.menu';

interface MainListProps {
  isProduct: boolean;
}

const MainList: React.FC<MainListProps> = ({ isProduct }) => {
  const [items, setItems] = useState<IProduct[] | IMenu[]>([]);

  const fetchMenu = async () => {
    const menu = await getRequest('/menu/list');
    setItems(menu);
  };

  const fetchProduct = async () => {
    const products = await getRequest('/product/list');
    setItems(products);
  };

  useEffect(() => {
    isProduct ? fetchProduct() : fetchMenu();
  }, [isProduct]);

  const renderItem: ListRenderItem<IProduct | IMenu> = ({ item, index }) => {
    return <MainListItem item={item} index={index} />;
  };

  const keyExtractor = (item: IProduct | IMenu) => item.id;

  return (
    <FlatList
      numColumns={2}
      data={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 20 }}
    />
  );
};

export default MainList;
