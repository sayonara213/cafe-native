import styled from 'styled-components/native';

interface IMainListItemContainerProps {
  index: number;
}

export const MainListItemContainer = styled.View<IMainListItemContainerProps>`
  flex: 0.5;
  height: 340px;
  padding: 16px;
  margin-right: ${({ index }) => (index % 2 === 0 ? 16 : 0)}px;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ListItemTextWrap = styled.View`
  flex: 1;
`;

export const ListItemImageWrap = styled.View`
  flex: 1;
`;

export const PriceWrap = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;
