import styled from 'styled-components/native';

export const AddressModalContainer = styled.ScrollView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const AddressWrapper = styled.View`
  height: 55px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.borderNotActive};
`;
