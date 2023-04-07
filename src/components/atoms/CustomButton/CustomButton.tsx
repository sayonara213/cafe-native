import React, { ReactNode } from 'react';

import * as Styled from './CustomButton.styled';

interface CustomButtonProps {
  type?: 'default' | 'cancel' | 'notActive';
  isActive?: boolean;
  children: ReactNode | undefined;
  onPress?: () => void;
  onLongPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ type, children, onPress, onLongPress }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  const handleLongPress = () => {
    if (onLongPress) {
      onLongPress();
    }
  };

  return (
    <Styled.CustomButtonContainer
      onPress={handlePress}
      onLongPress={handleLongPress}
      activeOpacity={0.8}
      type={type}>
      <Styled.CustomButtonText type={type}>{children}</Styled.CustomButtonText>
    </Styled.CustomButtonContainer>
  );
};

export default CustomButton;
