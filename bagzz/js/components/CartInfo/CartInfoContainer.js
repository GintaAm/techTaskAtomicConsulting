import React, {useContext, createContext} from 'react';
import {CartContext} from '../../../App';
import CartInfoComponent from './CartInfoComponent';

export default () => {
  const {cartCount} = useContext(CartContext);
  return <CartInfoComponent cartCount={cartCount} />;
};
