import styled from 'styled-components/native';

export const OrderListItemContainer = styled.TouchableOpacity`
  padding: 16px;
  flex-direction: row;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.borderNotActive};

  align-items: center;
`;

export const DescriptionWrap = styled.View`
  flex: 1;
  margin-right: 16px;
`;

export const InfoWrap = styled.View`
  width: 100px;
  align-items: flex-start;
  margin-right: 16px;
`;
