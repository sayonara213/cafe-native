import React, { useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

import { TabButton } from './tab-button';

import { ITabsViewProps, TabRoute } from './tabs-view.types';

import { StyledTabsView as Styled } from './tabs-view.styles';
import ListOptions from '@screens/main/molecules/list-options/list-options';

export const TabsView: React.FC<ITabsViewProps> = (props) => {
  const { routes, screens, children = true, isFilter = true } = props;

  const [index, setIndex] = useState<number>(0);

  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex);
  };

  const renderTabBar = (properties: any) => {
    return (
      <Styled.TabContainer>
        <Styled.TabsView>
          {children}
          <Styled.TabBar>
            {properties.navigationState.routes.map((route: TabRoute, number: number) => {
              return (
                <TabButton
                  key={route.title}
                  route={route}
                  onPress={setIndex}
                  isActive={number === index}
                  index={number}
                />
              );
            })}
          </Styled.TabBar>
        </Styled.TabsView>
        {isFilter && <ListOptions />}
      </Styled.TabContainer>
    );
  };

  const renderScene = SceneMap(screens);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={handleIndexChange}
    />
  );
};
