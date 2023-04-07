import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { css } from 'styled-components/native';

interface CustomInputProps extends TextInputProps {
  isFocused: boolean;
}

const PLACEHOLDER = () => ({
  default: css`
    left: 15px;
    top: 12px;
    font-size: 14px;
  `,
  focused: css`
    left: 10px;
    top: -9px;
    font-size: 12px;
  `,
});

export const CustomInputContainer = styled.View`
  width: 100%;
  height: 48px;

  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.borderNotActive};
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-horizontal: 15px;
`;

export const CustomInputPlaceholder = styled.Text<CustomInputProps>`
  position: absolute;
  padding-horizontal: 3px;
  ${({ isFocused }) => (isFocused ? PLACEHOLDER().focused : PLACEHOLDER().default)}

  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CustomInput = styled.TextInput`
  width: 280px;

  font-size: ${({ theme }) => theme.fontSize.regular};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Image = styled.Image`
  width: 20px;
  height: 20px;
`;
