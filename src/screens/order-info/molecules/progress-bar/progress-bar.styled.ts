import styled from 'styled-components/native';

interface ProgressBarProps {
  isCanceled?: boolean;
  active?: boolean;
}

export const ProgressBarContainer = styled.View`
  padding: 0 20px;
  margin-right: 20px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Point = styled.View<ProgressBarProps>`
  width: 13px;
  height: 13px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.secondary : theme.colors.primary};
  position: relative;
  outline: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Line = styled.View<ProgressBarProps>`
  flex-grow: 1;
  height: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.secondary : theme.colors.primary};
`;

export const PointContainer = styled.View<ProgressBarProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PointText = styled.Text`
  position: absolute;
  bottom: -15px;

  width: 55px;
  text-align: center;
  margin-top: 4px;

  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.secondary};
`;
