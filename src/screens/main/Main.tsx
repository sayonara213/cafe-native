import React from 'react';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import CustomText from '@components/atoms/CustomText/CustomText';
import { useAppDispatch } from '@services/hooks/redux.hook';
import { logOut } from '@services/store/user';
import * as Styled from './Main.styled';
import MainList from './molecules/main-list/main-list';
import { TabsView } from './organisms/tabs-view';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  const screens = {
    menuList: () => <MainList isProduct={false} />,
    productList: () => <MainList isProduct />,
  };

  const routes = [
    { key: 'menuList', title: 'Menus' },
    { key: 'productList', title: 'Products' },
  ];

  return (
    <Styled.MainContainer>
      <TabsView screens={screens} routes={routes} />
      {/* <CustomText>Test</CustomText>
      <CustomButton onPress={logout}>Log Out</CustomButton> */}
    </Styled.MainContainer>
  );
};

export default Main;
