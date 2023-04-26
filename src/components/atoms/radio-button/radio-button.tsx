import React from 'react';

import { RadioButton } from 'react-native-paper';

import { RadioButtonProps } from './radio-button.types';

import * as Styled from './radio-button.styled';
import CustomText from '../CustomText/CustomText';

import { theme } from '@theme/theme';

const CustomRadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onPress }) => {
  const handlePress = () => {
    onPress(value);
  };

  return (
    <Styled.RadioButtonContainer>
      <RadioButton
        value={value}
        status={checked ? 'checked' : 'unchecked'}
        onPress={handlePress}
        color={theme.colors.secondary}
      />
      <CustomText>{label}</CustomText>
    </Styled.RadioButtonContainer>
  );
};

export default CustomRadioButton;
