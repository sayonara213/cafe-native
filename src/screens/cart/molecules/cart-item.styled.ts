import styled from 'styled-components/native';

export const CartItemContainer = styled.View`
  margin-bottom: 16px;

  flex-direction: column;

  height: 115px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CartItemSection = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-horizontal: 16px;

  flex: 1;
`;

export const CartTopSection = styled.View`
  flex-direction: row;
`;

export const CartBottomSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
