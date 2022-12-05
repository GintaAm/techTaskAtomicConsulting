import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Button} from '@rneui/themed';

import Icon from 'react-native-vector-icons/AntDesign';

const style = StyleSheet.create({
  flatList: {
    marginHorizontal: -10,
    paddingHorizontal: 10,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  flatListItemContainer: {
    flex: 1,
    marginVertical: 5,
  },
  flatListItemContainerRow: {
    flexDirection: 'row',
  },
  flatListItemContainerRowLeft: {
    flexDirection: 'row',
    justifyContent: 'left',
  },
  flatListFirstColumnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  flatListSecondColumnContainer: {
    flex: 1,
    flexDirection: 'column',

    width: '50%',
  },
  touchableContainer: {alignItems: 'center', flex: 1},
  image: {
    height: 100,
    width: '60%',
    marginVertical: 10,
  },
  iconButton: {backgroundColor: 'black'},
  textButton: {backgroundColor: 'white'},
  textButtonTitle: {color: 'black', fontSize: 11},
  textTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    paddingBottom: 20,
  },
});

export default ({loading, cart, onProductPress, onMinusPress, onPlusPress}) => {
  if (loading) {
    return (
      <View style={style.container}>
        <ActivityIndicator />
      </View>
    );
  }

  const renderItem = ({item}) => {
    console.log(`#1670232134 item ${JSON.stringify(item)}`);
    return (
      <View style={style.flatListItemContainer}>
        <View style={style.flatListItemContainerRow}>
          <View style={style.flatListFirstColumnContainer}>
            <Image
              style={style.image}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                cache: 'reload',
              }}
              key={item.item_id}
            />
            <View style={style.flatListItemContainerRow}>
              <Button
                buttonStyle={style.iconButton}
                onPress={() => onMinusPress(item.item_id, item.quantity)}>
                <Icon name="minus" color="white" />
              </Button>
              <Button
                buttonStyle={style.textButton}
                titleStyle={style.textButtonTitle}
                title={`${item.quantity}`}
              />

              <Button
                buttonStyle={style.iconButton}
                onPress={() => onPlusPress(item.item_id, item.quantity)}>
                <Icon name="plus" color="white" />
              </Button>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              onProductPress(item.id);
            }}
            style={style.flatListSecondColumnContainer}>
            <Text style={style.textTitle}>{item.name}</Text>
            <Text style={style.textTitle}>{`$${item.price}`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <FlatList
        style={style.flatList}
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.item_id}
        columnWrapperStyle={style.columnWrapperStyle}
      />
    </View>
  );
};
