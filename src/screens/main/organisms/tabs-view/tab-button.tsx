import React from 'react';

import CustomText from '@components/atoms/CustomText/CustomText';

import { ITabButtonProps } from './tabs-view.types';

import { StyledTabsView as Styled } from './tabs-view.styles';

import { itemsShadow } from '@theme/shadows';
import { theme } from '@theme/theme';

export const TabButton: React.FC<ITabButtonProps> = (props) => {
  const { route, onPress, index, isActive } = props;
  const setIndex = () => {
    onPress(index);
  };
  return (
    <Styled.TabButton key={route.key} onPress={setIndex} isActive={isActive} style={itemsShadow}>
      <CustomText
        fontSize={14}
        fontFamily="Roboto-Medium"
        color={isActive ? theme.colors.primary : theme.colors.notActive}>
        {route.title.toUpperCase()}
      </CustomText>
    </Styled.TabButton>
  );
};
