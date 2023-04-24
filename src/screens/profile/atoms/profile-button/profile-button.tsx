import React from 'react';

import * as Styled from './profile-button.styled';
import CustomText from '@components/atoms/CustomText/CustomText';
import { ProfileButtonProps } from './profile-button.types';

import { theme } from '@theme/theme';

const ProfileButton: React.FC<ProfileButtonProps> = ({ onPress, label, isCancel }) => {
  return (
    <Styled.ProfileButtonBody onPress={onPress} activeOpacity={0.75}>
      <CustomText
        fontFamily="Roboto-Medium"
        color={isCancel ? theme.colors.red : theme.colors.purple}>
        {label}
      </CustomText>
    </Styled.ProfileButtonBody>
  );
};

export default ProfileButton;
