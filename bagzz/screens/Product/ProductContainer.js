import React, {
  useContext,
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from 'react';
import ProductComponent from './ProductComponent';
import {getProduct} from '../../apis/api';
import {Alert} from 'react-native';

export default () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setProduct(await getProduct());
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        Alert.alert(error.message);
      }
    };
    fetchProduct();
  }, []);

  return <ProductComponent loading={loading} product={product} />;
};
