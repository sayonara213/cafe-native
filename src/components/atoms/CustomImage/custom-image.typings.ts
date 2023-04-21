import React from 'react';

import { Priority, ResizeMode, Source } from 'react-native-fast-image';

import { TStyles } from '@typings/styles';
import { TImages } from './custom-image.map';

type TCache = 'immutable' | 'web' | 'cacheOnly';

export interface ICustomImageProps extends IStyledCustomImageProps {
  source?: Source;
  resizeMode?: ResizeMode;
  priority?: Priority;
  children?: React.ReactNode;
  cache?: TCache;
  type?: TImages;
}

export interface IStyledCustomImageProps {
  width: number | string;
  height: number;
  borderRadius?: number;
  styles?: TStyles;
}
