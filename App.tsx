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

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
    </Provider>
  );
}


export default App;
