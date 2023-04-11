import { useState } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export const useTabBarState = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const [isShowInvites, setIsShowInvites] = useState(true);

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const onTabPress = (_index: number, route: any, isFocused?: boolean) => () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return {
    isShowInvites,
    focusedOptions,
    onTabPress,
    setIsShowInvites,
  };
};
