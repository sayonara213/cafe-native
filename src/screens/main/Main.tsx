import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux.hook';

import MainList from './molecules/main-list/main-list';
import { TabsView } from './organisms/tabs-view';

import * as Styled from './Main.styled';
import { fetchProductList, fetchMenuList } from '@services/store/goods/goods.reducer';

const Main: React.FC = () => {
  const { menuList, productList, orderBy, types } = useAppSelector((store) => store.goods);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductList({ orderBy, types }));
    dispatch(fetchMenuList({ orderBy, types }));
  }, [orderBy, dispatch, types]);

  const screens = {
    menuList: () => <MainList items={menuList} />,
    productList: () => <MainList items={productList} />,
  };

  const routes = [
    { key: 'menuList', title: 'Menus' },
    { key: 'productList', title: 'Products' },
  ];

  return (
    <Styled.MainContainer>
      <TabsView screens={screens} routes={routes} />
    </Styled.MainContainer>
  );
};

export default Main;
