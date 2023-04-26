import styled from 'styled-components/native';

export const TextField = styled.TextInput`
  width: 100%;
  padding: 14px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.borderNotActive};

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.regular};

  text-align-vertical: top;
`;
