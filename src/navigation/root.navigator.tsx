import React from 'react';

import { APP_ROUTES } from '@constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '@screens/auth/auth';
import Header from '@components/organisms/Header/header';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{ header: () => <Header isAuth={true} value={APP_ROUTES.main.login} /> }}>
        <RootStack.Screen name={APP_ROUTES.main.login} component={Auth} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
