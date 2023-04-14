import { ReactNode } from 'react';
import { TIconNames } from '@components/atoms/Icon';

type ButtonType = 'default' | 'cancel' | 'notActive' | 'purple';
type ContentSide = 'flex-start' | 'flex-end' | 'center';

export interface CustomButtonProps {
  type?: ButtonType;
  isActive?: boolean;
  children?: ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  icon?: TIconNames;
  width?: number | string;
  contentSide?: ContentSide;
}
