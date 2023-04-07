import React from 'react';
import FastImage from 'react-native-fast-image';

import { ICustomImageProps } from './custom-image.typings';

import { StyledCustomImage as Styled } from './custom-image.styles';

export const CustomImage: React.FC<ICustomImageProps> = (props) => {
  const {
    width,
    height,
    styles,
    source,
    resizeMode = 'contain',
    priority = 'normal',
    cache = 'immutable',
    borderRadius = 0,
    children = null,
  } = props;

  return (
    <Styled.Image
      borderRadius={borderRadius}
      source={{
        ...source,
        priority: FastImage.priority[priority],
        cache: FastImage.cacheControl[cache],
      }}
      height={height}
      width={width}
      styles={styles}
      resizeMode={resizeMode}>
      {children}
    </Styled.Image>
  );
};
