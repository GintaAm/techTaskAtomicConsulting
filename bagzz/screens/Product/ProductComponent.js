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
  button: {marginBottom: 20},
});

export default ({loading, product}) => {
  if (loading) {
    return (
      <View style={style.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Text>labas</Text>
    </View>
  );
};
