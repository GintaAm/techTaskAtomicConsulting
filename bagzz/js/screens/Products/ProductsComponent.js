import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import BuyButton from '../../components/BuyButton';

const style = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  flatList: {
    marginHorizontal: -10,
    paddingHorizontal: 10,
  },
  flatListItemContainer: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    marginVertical: 5,
    marginHorizontal: 7,
  },
  touchableContainer: {alignItems: 'center', flex: 1},
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  image: {height: 100, width: '60%', marginVertical: 10},
  productName: {fontSize: 20, fontWeight: '700', marginVertical: 20},
});

export default ({loading, products, onProductPress}) => {
  if (loading) {
    return (
      <View style={style.container}>
        <ActivityIndicator />
      </View>
    );
  }

  const renderItem = ({item}) => {
    return (
      <View style={style.flatListItemContainer}>
        <TouchableOpacity
          onPress={() => {
            onProductPress(item.id);
          }}
          style={style.touchableContainer}>
          <Image
            style={style.image}
            source={{
              uri: item.uri,
              cache: 'reload',
            }}
            key={item.id}
          />
          <Text style={style.productName}>{item.name}</Text>
          <Text>{`$${item.price}`}</Text>
        </TouchableOpacity>
        <BuyButton productId={item.id} />
      </View>
    );
  };

  return (
    <View style={style.container}>
      <FlatList
        style={style.flatList}
        numColumns={2}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        columnWrapperStyle={style.columnWrapperStyle}
      />
    </View>
  );
};
