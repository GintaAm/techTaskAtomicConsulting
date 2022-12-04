import React, {useCallback, useContext} from 'react';
import BuyButtonComponent from './BuyButtonComponent';
import {CartContext} from '../../../App';
import {postCart} from '../../../apis/api';
import {Alert} from 'react-native';

export default ({productId}) => {
  const {getAndSetCartCount} = useContext(CartContext);
  const handleBuyPress = useCallback(
    async prodId => {
      try {
        const result = await postCart(prodId, 1);
        if (result?.ok) {
          Alert.alert('Successfully added to cart');
        }
        // count does not increase in reality, because end get cart always returns 2 items
        await getAndSetCartCount();
      } catch (error) {
        console.error(error);
        Alert.alert(error.message);
      }
    },
    [getAndSetCartCount],
  );
  return (
    <BuyButtonComponent productId={productId} onBuyPress={handleBuyPress} />
  );
};
