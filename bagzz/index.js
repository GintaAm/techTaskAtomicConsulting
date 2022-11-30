import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const style = StyleSheet.create({
  container: {flex: 1, flexGrow: 1},
});

const RootApp = () => (
  <GestureHandlerRootView style={style.container}>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => RootApp);
