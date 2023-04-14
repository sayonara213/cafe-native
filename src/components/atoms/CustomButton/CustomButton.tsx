import React from 'react';

import { Icon } from '@components/atoms/Icon';

import { CustomButtonProps } from './CustomButton.types';

import * as Styled from './CustomButton.styled';

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  children,
  onPress,
  onLongPress,
  icon,
  contentSide = 'center',
}) => {
  return (
    <Styled.CustomButtonContainer
      onPress={onPress!}
      onLongPress={onLongPress!}
      activeOpacity={0.8}
      type={type}
      style={{ justifyContent: contentSide }}>
      {icon && <Icon type={icon} style={{ marginHorizontal: 5 }} />}
      <Styled.CustomButtonText type={type}>{children}</Styled.CustomButtonText>
    </Styled.CustomButtonContainer>
  );
};

export default CustomButton;
