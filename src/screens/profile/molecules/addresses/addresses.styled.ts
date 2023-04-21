import styled from 'styled-components/native';

export const AddressListHeader = styled.View`
  padding-vertical: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddressList = styled.View``;

export const AddressListItem = styled.View`
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.borderNotActive};

  padding: 16px;
`;
