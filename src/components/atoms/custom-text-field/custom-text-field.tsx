import React from 'react';

import { CustomTextFieldProps } from './custom-text-field.types';
import * as Styled from './custom-text-field.styled';

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  placeholder,
  value,
  onBlur,
  onChangeText,
  onFocus,
}) => {
  return (
    <Styled.TextField
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onChangeText={onChangeText}
      onFocus={onFocus}
      multiline
      numberOfLines={3}
    />
  );
};

export default CustomTextField;
