import { StyleProp, ViewStyle } from 'react-native';

import { TIconNames } from './icon';

export interface IIconProps {
  type: TIconNames;
  color?: string;
  size?: number;
  width?: number;
  height?: number;
  activeOpacity?: number;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onLongPress?: () => void;
}
