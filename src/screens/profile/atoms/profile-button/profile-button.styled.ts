import styled from 'styled-components/native';

export const ProfileButtonBody = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;
