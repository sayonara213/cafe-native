import React, { FC } from 'react';

import { ICON_MAP } from './icon.map';

import { IIconProps } from './icon.types';

import { StyledIcon as Styled } from './icon.styles';

export type TIconNames = keyof typeof ICON_MAP;

export const Icon: FC<IIconProps> = (props) => {
  const {
    type,
    size,
    style,
    height,
    width,
    color,
    disabled,
    activeOpacity = 1,
    onPress,
    onLongPress,
  } = props;

  const SelectedIcon = ICON_MAP[type];
  const iconProps = SelectedIcon({})?.props;

  const iconHeight = size ?? height ?? iconProps.height;
  const iconWidth = size ?? width ?? iconProps.width;

  const icon = <SelectedIcon color={color} style={{ height: iconHeight, width: iconWidth }} />;

  const wrapperStyle = [{ height: iconHeight, width: iconWidth }, style];

  return onPress || onLongPress ? (
    <Styled.Press
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity}
      style={wrapperStyle}
      disabled={disabled}>
      {icon}
    </Styled.Press>
  ) : (
    <Styled.Wrapper style={wrapperStyle}>{icon}</Styled.Wrapper>
  );
};
