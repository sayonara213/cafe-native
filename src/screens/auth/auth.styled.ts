import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding-horizontal: 16px;

  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const AdditionalButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.View`
  width: 100%;
`;
