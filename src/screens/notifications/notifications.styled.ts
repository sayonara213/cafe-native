import styled from 'styled-components/native';

export const NotificationsContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SectionContainer = styled.View`
  padding-horizontal: 16px;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const NotificationsHeader = styled.View`
  padding-vertical: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
