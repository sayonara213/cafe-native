import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomBottomTabBar } from './bottom-tab-bar/bottom-tab-bar';
import Main from '@screens/main/Main';
import Profile from '@screens/profile/profile';
import Header from '@components/organisms/Header/header';

const Tab = createBottomTabNavigator();

export const HomeStack: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      screenOptions={{ header: (props) => <Header isAuth={false} headerProps={props} /> }}>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Orders" component={React.Fragment} />
    </Tab.Navigator>
  );
};
