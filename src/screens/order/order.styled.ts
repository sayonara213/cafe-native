import styled from 'styled-components/native';

export const SafeOrderView = styled.SafeAreaView`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;

export const OrderContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CommentSection = styled.View`
  margin-top: 32px;
  flex: 1;
  flex-grow: 2;
`;
