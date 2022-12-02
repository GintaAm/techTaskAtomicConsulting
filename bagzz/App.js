import React from 'react';
import {
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Header, Input, Overlay} from 'react-native-elements';

import {NavigationContainer} from '@react-navigation/native';
import Products from './screens/Products';
import Product from './screens/Product';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: Platform.OS === 'ios' ? 0 : 20,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <Stack.Navigator
          screenOptions={() => ({
            animation: 'slide_from_right',
            headerShadowVisible: true,
            contentStyle: {
              flex: 1,
              backgroundColor: 'blue',
              paddingHorizontal: 20,
              paddingTop: 15,
            },
            headerStyle: {
              backgroundColor: '#ffffff',
              elevation: 0,
              shadowColor: 'transparent',
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              minHeight: 16,
              fontSize: 16,
              lineHeight: 20,
            },
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerTintColor: '#000000',
          })}>
          <Stack.Screen
            name="Products"
            options={() => ({
              title: 'Bagzz',
            })}
            component={Products}
          />
          <Stack.Screen
            name="Product"
            options={() => ({
              title: 'Bag',
            })}
            component={Product}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
