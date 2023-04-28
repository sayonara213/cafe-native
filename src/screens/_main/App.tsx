import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from '@navigation/root.navigator';
import { setupStore } from '@services/store';
import { theme } from '@theme/theme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const App = () => {
  const store = setupStore();
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ThemeProvider theme={theme}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <BottomSheetModalProvider>
                <SafeAreaProvider>
                  <RootNavigator />
                </SafeAreaProvider>
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </ThemeProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
