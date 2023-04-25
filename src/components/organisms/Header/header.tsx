import React from 'react';

import { StackHeaderProps } from '@react-navigation/stack';

import CustomText from '@components/atoms/CustomText/CustomText';
import { Icon } from '@components/atoms/Icon';

import { theme } from '@theme/theme';
import * as Styled from './header.styled';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { APP_ROUTES } from '@constants/routes';

interface HeaderProps {
  isAuth: boolean;
  headerProps: StackHeaderProps | BottomTabHeaderProps;
}

const Header: React.FC<HeaderProps> = ({ isAuth, headerProps }) => {
  const { route, navigation } = headerProps;

  const goBack = () => {
    navigation.goBack();
  };

  const goToCart = () => {
    navigation.navigate(APP_ROUTES.main.cart);
  };

  return (
    <Styled.HeaderContainer>
      {navigation.canGoBack() && !isAuth && (
        <Icon type="backArrow" size={20} onPress={goBack} style={{ marginRight: 16 }} />
      )}
      <Styled.TitleContainer>
        <CustomText
          color={theme.colors.primary}
          fontSize={20}
          fontFamily="Roboto-Medium"
          textAlign={isAuth ? 'center' : 'left'}
          width={isAuth ? 'auto' : '100%'}>
          {route.name}
        </CustomText>
      </Styled.TitleContainer>
      {!isAuth && (
        <Styled.HeaderButtonContainer>
          <Icon type={'notification'} size={20} />
          <Icon type={'cart'} size={20} onPress={goToCart} />
          <Icon type={'search'} size={20} />
        </Styled.HeaderButtonContainer>
      )}
    </Styled.HeaderContainer>
  );
};

export default Header;
