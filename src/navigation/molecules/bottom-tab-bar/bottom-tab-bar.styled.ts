import styled from 'styled-components/native';

export const TabWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-top-width: 1px;
  padding: 10px 40px 15px 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Tab = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
