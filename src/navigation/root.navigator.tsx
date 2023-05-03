import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Auth from '@screens/auth/auth';
import AuthAdditional from '@screens/auth-additional/authAdditional';

import EditProfile from '@screens/edit-profile/edit-profile';
import { HomeStack } from './molecules/home-stack';
import Header from '@components/organisms/Header/header';

import { useAppSelector } from '@services/hooks/redux.hook';
import { APP_ROUTES } from '@constants/routes';
import Cart from '@screens/cart/cart';
import Order from '@screens/order/order';
import OrderConfirmation from '@screens/order-confirmation/order-confirmation';
import { IAddress } from '@typings/types.address';
import OrderInfo from '@screens/order-info/order-info';
import Notifications from '@screens/notifications/notifications';

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
            options={{ gestureEnabled: false, headerShown: false }}
          />
          <RootStack.Screen name={APP_ROUTES.auth.authAdditional} component={AuthAdditional} />
          <RootStack.Screen
            name={APP_ROUTES.user.editProfile}
            component={EditProfile}
            options={{ gestureEnabled: false }}
          />
          <RootStack.Screen
            name={APP_ROUTES.main.cart}
            component={Cart}
            options={{ gestureEnabled: false }}
          />
          <RootStack.Screen
            name={APP_ROUTES.main.order}
            component={Order}
            options={{ gestureEnabled: false }}
          />
          <RootStack.Screen
            name={APP_ROUTES.main.orderConfirmation}
            component={OrderConfirmation}
            initialParams={{ address: {} as IAddress, deliveryDate: '', comment: '' }}
            options={{ gestureEnabled: false }}
          />
          <RootStack.Screen
            name={APP_ROUTES.order.orderDetails}
            component={OrderInfo}
            options={{ gestureEnabled: false }}
            initialParams={{ orderId: '' }}
          />
          <RootStack.Screen
            name={APP_ROUTES.main.notifications}
            component={Notifications}
            options={{ gestureEnabled: false }}
          />
        </RootStack.Group>
      ) : (
        <RootStack.Group
          screenOptions={{
            header: (props) => <Header isAuth={true} headerProps={props} />,
          }}>
          <RootStack.Screen name={APP_ROUTES.auth.login} component={Auth} />
          <RootStack.Screen name={APP_ROUTES.auth.register} component={Auth} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};
