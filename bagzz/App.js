import React, {useEffect, createContext, useState} from 'react';
import {SafeAreaView, Platform, StyleSheet} from 'react-native';
import CartInfo from './js/components/CartInfo';
import {Alert} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Products from './js/screens/Products';
import Product from './js/screens/Product';
import Cart from './js/screens/Cart';

import {createStackNavigator} from '@react-navigation/stack';

import {getCart} from './apis/api';

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
    try {
      const cartItems = await getCart();
      setCartCount(
        cartItems.reduce((total, {quantity}) => total + quantity, 0),
      );
    } catch (error) {
      console.error(error);
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    getAndSetCartCount();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <CartContext.Provider
          value={{
            cartCount,
            getAndSetCartCount,
          }}>
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
            <Stack.Screen
              name="Cart"
              options={() => ({
                title: 'Cart',
              })}
              component={Cart}
            />
          </Stack.Navigator>
          <CartInfo />
        </CartContext.Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
