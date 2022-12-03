import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ActivityIndicator,
  Button,
} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    marginVertical: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  image: {height: 100, width: '60%', marginVertical: 10},
  productName: {fontSize: 20, fontWeight: '700', marginVertical: 20},
  productDescription: {marginVertical: 5},
  button: {marginBottom: 20},
});

export default ({loading, product}) => {
  console.log(`#1670064730 product ${JSON.stringify(product)}`);
  if (loading) {
    return (
      <View style={style.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Image
        style={style.image}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
          cache: 'reload',
        }}
        key={product.id}
      />
      <Text style={style.productName}>{product.name}</Text>
      <Text>{`$${product.price}`}</Text>
      <Text style={style.productDescription}>{product.description}</Text>
    </View>
  );
};
