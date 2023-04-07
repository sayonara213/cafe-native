import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  padding: 0 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
  height: 60px;
`;

export const HeaderText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  text-align: center;
`;
