import React, { useState } from 'react';

import * as Styled from './CustomInput.styled';
import { Icon, TIconNames } from '@components/atoms/Icon';

export type TInput = 'email' | 'password' | 'number' | 'text';
interface CustomInputProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  isAnimated?: boolean;
  type?: TInput;
  icon?: TIconNames;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChangeText,
  placeholder,
  isAnimated = false,
  type = 'text',
  icon,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <Styled.CustomInputContainer>
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
        onBlur={handleBlur}
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
