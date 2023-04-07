import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { css } from 'styled-components/native';

interface CustomButtonProps extends TouchableOpacityProps {
  isActive?: boolean;
  type?: 'default' | 'cancel' | 'notActive';
}

const BUTTONS = () => ({
  default: css`
    background-color: ${({ theme }) => theme.colors.secondary};
  `,
  cancel: css`
    background-color: transparent;
  `,
  notActive: css`
    background-color: ${({ theme }) => theme.colors.notActive};
  `,
});

const TEXTS = () => ({
  default: css`
    color: ${({ theme }) => theme.colors.primary};
  `,
  cancel: css`
    color: ${({ theme }) => theme.colors.red};
  `,
  notActive: css`
    color: ${({ theme }) => theme.colors.primary};
  `,
});

export const CustomButtonContainer = styled.TouchableOpacity<CustomButtonProps>`
  ${({ type }) => (!type ? BUTTONS().default : BUTTONS()[type])}

  width: 100%;
  height: 48px;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text<{ type?: 'default' | 'cancel' | 'notActive' }>`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  ${({ type }) => (!type ? TEXTS().default : TEXTS()[type])}
`;
