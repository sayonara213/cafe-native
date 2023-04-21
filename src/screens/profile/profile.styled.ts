import styled from 'styled-components/native';

export const ProfileContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ProfileHeader = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;

  padding: 16px;
  margin-bottom: 16px;
`;

export const UserInfoWrap = styled.View`
  margin-left: 16px;
`;

export const UserRoleWrap = styled.View`
  flex: 1;
  height: 100%;
  align-items: flex-end;
`;

export const SectionContainer = styled.View`
  padding-horizontal: 16px;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonsWrap = styled.View`
  flex-direction: row;
`;
