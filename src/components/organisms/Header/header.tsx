import React from 'react';

import { StackHeaderProps } from '@react-navigation/stack';

import CustomText from '@components/atoms/CustomText/CustomText';
import { Icon, TIconNames } from '@components/atoms/Icon';

import { theme } from '@theme/theme';
import * as Styled from './header.styled';

interface HeaderProps {
  isAuth: boolean;
  headerProps: StackHeaderProps;
}

const headerButtons: TIconNames[] = ['notification', 'cart', 'search'];

const Header: React.FC<HeaderProps> = ({ isAuth, headerProps }) => {
  const { route, navigation } = headerProps;
  const goBack = () => {
    navigation.goBack();
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
          {headerButtons.map((headerButton) => (
            <Icon type={headerButton} size={20} key={headerButton} />
          ))}
        </Styled.HeaderButtonContainer>
      )}
    </Styled.HeaderContainer>
  );
};

export default Header;
