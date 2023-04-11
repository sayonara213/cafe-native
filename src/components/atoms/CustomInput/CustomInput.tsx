import React, { useState } from 'react';

import * as Styled from './CustomInput.styled';
import { Icon, TIconNames } from '@components/atoms/Icon';

export type TInput = 'email' | 'password' | 'number' | 'text';
interface CustomInputProps {
  value: string;
  onChangeText: (value: string) => void;
  onBlur?: (e: any) => void;
  placeholder: string;
  isAnimated?: boolean;
  type?: TInput;
  icon?: TIconNames;
  isError?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChangeText,
  placeholder,
  isAnimated = false,
  type = 'text',
  icon,
  isError = false,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleEndFocus = () => {
    setIsFocused(false);
  };

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <Styled.CustomInputContainer isError={isError}>
      {isAnimated && (
        <Styled.CustomInputPlaceholder isFocused={isFocused || value !== ''}>
          {placeholder}
        </Styled.CustomInputPlaceholder>
      )}
      <Styled.CustomInput
        value={value}
        onChangeText={onChangeText}
        placeholder={isAnimated ? '' : placeholder}
        placeholderTextColor="#000"
        onFocus={handleFocus}
        onBlur={onBlur}
        onEndEditing={handleEndFocus}
        secureTextEntry={type === 'password' ? hide : false}
      />
      {type === 'password' ? (
        <Icon
          type={hide ? 'hide' : 'show'}
          width={20}
          height={20}
          color="#fff"
          onPress={toggleHide}
        />
      ) : (
        icon && <Icon type={icon} width={20} height={20} color="#fff" onPress={toggleHide} />
      )}
    </Styled.CustomInputContainer>
  );
};

export default CustomInput;
