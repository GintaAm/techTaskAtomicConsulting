import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import BuyButton from '../../components/BuyButton';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

export default ({loading, cart, onProductPress}) => {
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
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
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
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        columnWrapperStyle={style.columnWrapperStyle}
      />
    </View>
  );
};
