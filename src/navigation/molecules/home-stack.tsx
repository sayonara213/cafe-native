import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomBottomTabBar } from './bottom-tab-bar/bottom-tab-bar';
import Main from '@screens/main/Main';
import Profile from '@screens/profile/profile';
import Header from '@components/organisms/Header/header';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux.hook';
import { useNotifications } from '@services/hooks/notifications.hook';
import Orders from '@screens/orders/orders';

const Tab = createBottomTabNavigator();

export const HomeStack: React.FC = () => {
  const userId = useAppSelector((state) => state.user.user.id);
  const dispatch = useAppDispatch();
  useNotifications(userId, dispatch);
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      screenOptions={{ header: (props) => <Header isAuth={false} headerProps={props} /> }}>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Orders" component={Orders} />
    </Tab.Navigator>
  );
};
