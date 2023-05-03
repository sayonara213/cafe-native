import styled from 'styled-components/native';

import { TextProps } from 'react-native';

interface StarButtonTextProps extends TextProps {
  isPicked: boolean;
}

export const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: space-between;
`;

export const RatingSection = styled.View`
  margin-right: 30px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StarsContainer = styled.View`
  flex-direction: row;
`;

export const StarButton = styled.TouchableOpacity`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 2px;
`;

export const StarButtonText = styled.Text<StarButtonTextProps>`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ isPicked, theme }) => (isPicked ? theme.colors.secondary : theme.colors.notActive)};
`;
