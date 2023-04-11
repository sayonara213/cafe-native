import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as Styled from './bottom-tab-bar.styled';
import CustomText from '@components/atoms/CustomText/CustomText';
import { theme } from '@theme/theme';
import { useTabBarState } from './bottom-tab-bar.state';
import { getIcon } from './bottom-tab-bar.utils';
import { Icon } from '@components/atoms/Icon';

export const CustomBottomTabBar: React.FC<BottomTabBarProps> = (props) => {
  const { state, descriptors } = props;

  const { onTabPress } = useTabBarState(props);

  return (
    <Styled.TabWrapper>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const routeName = route.name;
        return (
          <Styled.Tab
            key={index}
            activeOpacity={1}
            accessibilityRole="button"
            onPress={onTabPress(index, route, isFocused)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}>
            <Icon
              type={getIcon(isFocused)[route.name.toLowerCase()]}
              size={20}
              onPress={onTabPress(index, route, isFocused)}
              style={{ marginBottom: 4 }}
            />
            <CustomText color={isFocused ? theme.colors.primary : theme.colors.notActive}>
              {routeName}
            </CustomText>
          </Styled.Tab>
        );
      })}
    </Styled.TabWrapper>
  );
};
