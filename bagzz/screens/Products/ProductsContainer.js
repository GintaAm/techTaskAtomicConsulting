import React, {
  useContext,
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from 'react';
import ProductsComponent from './ProductsComponent';
import {listProducts} from '../../apis/api';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
    async productId => {
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
