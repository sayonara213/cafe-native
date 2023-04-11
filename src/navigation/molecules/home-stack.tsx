import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomBottomTabBar } from './bottom-tab-bar/bottom-tab-bar';
import Main from '@screens/main/Main';
import Auth from '@screens/auth/auth';

const Tab = createBottomTabNavigator();

export const HomeStack: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Profile" component={Auth} />
      <Tab.Screen name="Orders" component={React.Fragment} />
    </Tab.Navigator>
  );
};