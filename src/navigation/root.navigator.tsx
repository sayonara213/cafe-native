import React from 'react';

import { APP_ROUTES } from '@constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '@screens/auth/auth';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name={APP_ROUTES.main.auth} component={Auth} />
    </RootStack.Navigator>
  );
};
