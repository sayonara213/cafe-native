import React from 'react';

import { APP_ROUTES } from '@constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '@screens/auth/auth';
import Header from '@components/organisms/Header/header';
import { useAppSelector } from '@services/hooks/redux.hook';
import AuthAdditional from '@screens/authAdditional/authAdditional';
import { HomeStack } from './molecules/home-stack';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  const token = useAppSelector((state) => state.user.access_token);

  return (
    <RootStack.Navigator>
      {token ? (
        <RootStack.Group
          screenOptions={{
            header: (props) => <Header isAuth={false} headerProps={props} />,
          }}>
          <RootStack.Screen
            name={APP_ROUTES.main.home}
            component={HomeStack}
            options={{ gestureEnabled: false }}
          />
          <RootStack.Screen name={APP_ROUTES.auth.authAdditional} component={AuthAdditional} />
        </RootStack.Group>
      ) : (
        <RootStack.Group
          screenOptions={{
            header: (props) => <Header isAuth={true} headerProps={props} />,
          }}>
          <RootStack.Screen
            name={APP_ROUTES.auth.login}
            component={Auth}
            initialParams={{ isLogin: true }}
          />
          <RootStack.Screen
            name={APP_ROUTES.auth.register}
            component={Auth}
            initialParams={{ isLogin: false }}
          />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};
