import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistCombineReducers } from 'redux-persist';

import { userReducer } from './user/user.reducer';
import goodsReducer from './goods/goods.reducer';
import cartReducer from './cart/cart.reducer';
import { notificationsReducer } from './notifications/notifications.reducer';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['goods', 'cart', 'notifications'],
};
const reducer = persistCombineReducers(config, {
  user: userReducer,
  goods: goodsReducer,
  cart: cartReducer,
  notifications: notificationsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
