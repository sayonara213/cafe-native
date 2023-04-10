import React from 'react';
import * as Styled from './header.styled';
import { StackHeaderProps } from '@react-navigation/stack';

interface HeaderProps {
  isAuth: boolean;
  headerProps: StackHeaderProps;
}

const Header: React.FC<HeaderProps> = ({ isAuth, headerProps }) => {
  const { route } = headerProps;

  if (isAuth) {
    return (
      <Styled.HeaderContainer>
        <Styled.HeaderText>{route.name}</Styled.HeaderText>
      </Styled.HeaderContainer>
    );
  }

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderText>{route.name}</Styled.HeaderText>
    </Styled.HeaderContainer>
  );
};

export default Header;
