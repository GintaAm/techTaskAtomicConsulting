import React, {useEffect, useState, useCallback} from 'react';
import CartComponent from './CartComponent';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {deleteCartItem, getCart, updateCartItem} from '../../../apis/api';

export default () => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});

  const navigation = useNavigation();

  const fetchCart = async () => {
    try {
      setLoading(true);
      setCart(await getCart());
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleProductPress = useCallback(
    productId => {
      navigation.navigate('Product', productId);
    },
    [navigation],
  );

  const handleMinusPress = useCallback(async (productId, currentQuantity) => {
    try {
      if (currentQuantity === 1) {
        await deleteCartItem(productId);
      } else {
        await updateCartItem(productId, Number(currentQuantity) - 1);
      }
      await fetchCart();
    } catch (error) {
      setLoading(false);
      Alert.alert(error.message);
    }
  }, []);

  const handlePlusPress = useCallback(async (productId, currentQuantity) => {
    try {
      await updateCartItem(productId, Number(currentQuantity) + 1);
      await fetchCart();
    } catch (error) {
      setLoading(false);
      Alert.alert(error.message);
    }
  }, []);

  return (
    <CartComponent
      loading={loading}
      cart={cart}
      onProductPress={handleProductPress}
      onMinusPress={handleMinusPress}
      onPlusPress={handlePlusPress}
    />
  );
};
