import React, {useEffect, useCallback, useState} from 'react';
import ProductsComponent from './ProductsComponent';

import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {listProducts} from '../../../apis/api';

export default () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setProducts(await listProducts());
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        Alert.alert(error.message);
      }
    };
    getProducts();
  }, []);

  const handleProductPress = useCallback(
    productId => {
      navigation.navigate('Product', productId);
    },
    [navigation],
  );

  return (
    <ProductsComponent
      loading={loading}
      products={products}
      onProductPress={handleProductPress}
    />
  );
};
