import React from 'react';

import CustomText from '@components/atoms/CustomText/CustomText';

import { Icon } from '@components/atoms/Icon';
import { SectionContainer } from '@screens/profile/profile.styled';

import { itemsShadow } from '@theme/shadows';
import * as Styled from './settings.styled';

const settingsList = [
  {
    title: 'Privacy policy',
    onPress: () => {},
  },
  {
    title: 'Change password',
    onPress: () => {},
  },
  {
    title: 'Delete Account',
    onPress: () => {},
  },
  {
    title: 'Orders',
    onPress: () => {},
  },
];

const ProfileSettings: React.FC = () => {
  return (
    <SectionContainer style={itemsShadow}>
      <Styled.SettingsListHeader>
        <CustomText fontSize={14}>Settings</CustomText>
      </Styled.SettingsListHeader>
      <Styled.SettingsList>
        {settingsList.map((item) => (
          <Styled.SettingsListItem key={item.title} activeOpacity={0.7}>
            <CustomText fontSize={14}>{item.title}</CustomText>
            <Icon type="forwardArrow" />
          </Styled.SettingsListItem>
        ))}
      </Styled.SettingsList>
    </SectionContainer>
  );
};

export default ProfileSettings;
