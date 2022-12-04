import React, {useEffect, useState} from 'react';
import ProductComponent from './ProductComponent';
import {useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';
import {getProduct} from '../../../apis/api';

export default () => {
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setProduct(await getProduct(route.params?.productId));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        Alert.alert(error.message);
      }
    };
    fetchProduct();
  }, [route.params?.productId]);

  return <ProductComponent loading={loading} product={product} />;
};
