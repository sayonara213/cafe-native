import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface IRenderScene {
  [key: string]: React.ComponentType<unknown>;
}
export interface TabRoute {
  key: string;
  title: string;
}
export interface ITabsViewProps {
  children?: ReactNode;
  prevRouteText?: string;
  tabsStyle?: StyleProp<ViewStyle>;
  title?: string;
  screens: IRenderScene;
  routes: TabRoute[];
  isFilter?: boolean;
}

export interface ITabButtonProps {
  route: TabRoute;
  onPress: (index: number) => void;
  index: number;
  isActive: boolean;
}
