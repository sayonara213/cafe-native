import React from 'react';
import FastImage from 'react-native-fast-image';

import { ICustomImageProps } from './custom-image.typings';

import { StyledCustomImage as Styled } from './custom-image.styles';

const { priority: fastImagePriority, cacheControl } = FastImage;

export const CustomImage: React.FC<ICustomImageProps> = ({
  width,
  height,
  styles,
  source,
  resizeMode = 'contain',
  priority = 'normal',
  cache = 'immutable',
  borderRadius = 0,
  children = null,
}) => {
  return (
    <Styled.Image
      borderRadius={borderRadius}
      source={{
        ...source,
        priority: fastImagePriority[priority],
        cache: cacheControl[cache],
      }}
      height={height}
      width={width}
      styles={styles}
      resizeMode={resizeMode}>
      {children}
    </Styled.Image>
  );
};
