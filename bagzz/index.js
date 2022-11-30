import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const RootApp = () => (
  <GestureHandlerRootView>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => RootApp);
