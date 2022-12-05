import React, {useContext, useCallback} from 'react';
import {CartContext} from '../../../App';
import CartInfoComponent from './CartInfoComponent';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const {cartCount} = useContext(CartContext);

  const navigation = useNavigation();

  const handleCartPress = useCallback(
    productId => {
      navigation.navigate('Cart');
    },
    [navigation],
  );

  return (
    <CartInfoComponent cartCount={cartCount} onCartPress={handleCartPress} />
  );
};
