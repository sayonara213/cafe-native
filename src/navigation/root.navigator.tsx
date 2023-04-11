import React from 'react';

import { APP_ROUTES } from '@constants/routes';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '@screens/auth/auth';
import Header from '@components/organisms/Header/header';
import { useAppSelector } from '@services/hooks/redux.hook';
import Main from '@screens/main/Main';
import AuthAdditional from '@screens/authAdditional/authAdditional';

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
          <RootStack.Screen name={APP_ROUTES.main.main} component={Main} />
          <RootStack.Screen name={APP_ROUTES.main.authAdditional} component={AuthAdditional} />
        </RootStack.Group>
      ) : (
        <RootStack.Group
          screenOptions={{
            header: (props) => <Header isAuth={true} headerProps={props} />,
          }}>
          <RootStack.Screen
            name={APP_ROUTES.main.login}
            component={Auth}
            initialParams={{ isLogin: true }}
          />
          <RootStack.Screen
            name={APP_ROUTES.main.register}
            component={Auth}
            initialParams={{ isLogin: false }}
          />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};
