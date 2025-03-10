/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {TabNavigation} from './src/context/TabNavigation.tsx';
import {Provider} from 'react-redux';
import {store} from './src/redux/store.ts';
import {AuthProvider} from './src/context/AuthContext.tsx';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}

export default App;
