import styled from 'styled-components/native';

export const NotificationsItemContainer = styled.TouchableOpacity`
  padding: 16px;
  flex-direction: row;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.borderNotActive};

  justify-content: space-between;
  align-items: center;
`;

export const DescriptionWrap = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const InfoWrap = styled.View`
  align-items: flex-start;
  margin-right: 16px;
`;

export const IsReadIndicator = styled.View<{ isRead: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, isRead }) => (isRead ? theme.colors.primary : theme.colors.purple)};
`;
