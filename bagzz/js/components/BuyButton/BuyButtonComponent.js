import React from 'react';

import {Button} from 'react-native';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  button: {marginBottom: 20},
});

export default ({productId, onBuyPress}) => {
  return (
    <Button
      style={style.button}
      onPress={() => onBuyPress(productId)}
      title="Buy"
      color="black"
    />
  );
};
