import React, {useEffect, useState} from 'react';
import CartComponent from './CartComponent';

import {Alert} from 'react-native';
import {getCart} from '../../../apis/api';

export default () => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});

  useEffect(() => {
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
    fetchCart();
  }, []);

  const handleProductPress = useCallback(
    productId => {
      navigation.navigate('Product', productId);
    },
    [navigation],
  );

  console.log(`#1670152536 cart ${JSON.stringify(cart)}`);
  return (
    <CartComponent
      loading={loading}
      cart={cart}
      onProductPress={handleProductPress}
    />
  );
};
