import React from 'react';

import CheckBox from '@react-native-community/checkbox';

import CustomText from '@components/atoms/CustomText/CustomText';

import { ICheckBoxProps } from './check-box.types';

import { theme } from '@theme/theme';
import * as Styled from './check-box.styled';

const checkBoxColors = {
  true: theme.colors.secondary,
  false: theme.colors.secondary,
};

const CustomCheckBox: React.FC<ICheckBoxProps> = ({ checked, onPress, label, value }) => {
  const handlePress = () => {
    value ? onPress(value) : onPress(label);
  };

  return (
    <Styled.CheckBoxContainer>
      <CheckBox onValueChange={handlePress} value={checked} tintColors={checkBoxColors} />
      <CustomText>{label}</CustomText>
    </Styled.CheckBoxContainer>
  );
};

export default CustomCheckBox;
