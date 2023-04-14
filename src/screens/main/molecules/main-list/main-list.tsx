import React from 'react';
import { FlatList } from 'react-native';

import { IProduct } from '@typings/types.products';

import MainListItem from '@screens/main/atoms/main-list-item/main-list-item';
import { ListRenderItem } from 'react-native/types';
import { IMenu } from '@typings/types.menu';

interface MainListProps {
  items: IProduct[] | IMenu[];
}

const MainList: React.FC<MainListProps> = ({ items }) => {
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
