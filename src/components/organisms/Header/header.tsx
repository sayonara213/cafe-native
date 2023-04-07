import React from 'react';
import * as Styled from './header.styled';

interface HeaderProps {
  isAuth: boolean;
  value?: string;
}

const Header: React.FC<HeaderProps> = ({ isAuth, value }) => {
  if (isAuth) {
    return (
      <Styled.HeaderContainer>
        <Styled.HeaderText>{value}</Styled.HeaderText>
      </Styled.HeaderContainer>
    );
  }

  return <Styled.HeaderContainer />;
};

export default Header;
