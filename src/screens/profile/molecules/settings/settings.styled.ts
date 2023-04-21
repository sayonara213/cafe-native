import styled from 'styled-components/native';

export const SettingsListHeader = styled.View`
  padding-vertical: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SettingsList = styled.View``;

export const SettingsListItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.borderNotActive};

  padding: 16px;
`;
