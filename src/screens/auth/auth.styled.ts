import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding-horizontal: 16px;

  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;
