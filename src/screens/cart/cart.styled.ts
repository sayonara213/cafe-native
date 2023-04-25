import styled from 'styled-components/native';

export const CartContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CartFooter = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CartFooterText = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CartBody = styled.ScrollView`
  padding: 16px;
  flex: 1;
`;

export const EmptyCartContainer = styled.View`
  justify-content: center;
  align-items: center;

  flex: 1;

  background-color: ${({ theme }) => theme.colors.primary};
`;
