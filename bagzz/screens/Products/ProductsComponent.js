import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from 'react-native';

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
    alignItems: 'center',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  image: {height: 100, width: '60%', marginVertical: 10},
  productName: {fontSize: 20, fontWeight: '700', marginVertical: 20},
  button: {marginBottom: 20},
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
      <TouchableOpacity
        onPress={onProductPress}
        style={style.flatListItemContainer}>
        <Image
          style={style.image}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            cache: 'reload',
          }}
          key={item.id}
        />
        <Text style={style.productName}>{item.name}</Text>
        <Text style>{`$${item.price}`}</Text>
        <Button
          style={style.button}
          onProductPress={() => onProductPress(item.id)}
          title="Buy"
          color="black"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.container}>
      <FlatList
        style={style.flatList}
        //in request we only have one item, for this reason this one item is stretched to full screen, if you add more items, it will show 2 items per row
        numColumns={2}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        columnWrapperStyle={style.columnWrapperStyle}
      />
    </View>
  );
};
