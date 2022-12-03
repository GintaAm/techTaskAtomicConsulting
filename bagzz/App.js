import React, {useEffect, createContext, useState, useRef} from 'react';
import {
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import CartInfo from './js/components/CartInfo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import Products from './js/screens/Products';
import Product from './js/screens/Product';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
export const CartContext = createContext();

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: Platform.OS === 'ios' ? 0 : 20,
  },
});

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const getAndSetCartCount = async () => {
    //const cartItems
  };

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
        <CartInfo />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
