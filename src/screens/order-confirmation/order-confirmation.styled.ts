import styled from 'styled-components/native';

export const OrderConfirmationSafeView = styled.SafeAreaView`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;

export const OrderConfirmationContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const OrderConfirmationSection = styled.View`
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.borderNotActive};
  align-items: flex-start;
`;

export const OrderConfirmationItem = styled.View`
  align-items: flex-start;
  margin-top: 24px;
`;

export const OrderConfirmationTotalWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
