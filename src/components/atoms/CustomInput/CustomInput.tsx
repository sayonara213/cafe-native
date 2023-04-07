import React from 'react';
import { ImageSourcePropType } from 'react-native';
import * as Styled from './CustomInput.styled';
import { ICON_MAP } from '@assets/icons';

interface CustomInputProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  isAnimated?: boolean;
  type?: 'text' | 'password' | 'email' | 'number';
  icon?: ImageSourcePropType;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChangeText,
  placeholder,
  isAnimated = false,
  type = 'text',
  icon,
}) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Styled.CustomInputContainer>
      {isAnimated && (
        <Styled.CustomInputPlaceholder isFocused={isFocused}>
          {placeholder}
        </Styled.CustomInputPlaceholder>
      )}
      <Styled.CustomInput
        value={value}
        onChangeText={onChangeText}
        placeholder={isAnimated ? '' : placeholder}
        placeholderTextColor="#000"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {icon && <Styled.Image source={ICON_MAP.hide} />}
    </Styled.CustomInputContainer>
  );
};

export default CustomInput;
