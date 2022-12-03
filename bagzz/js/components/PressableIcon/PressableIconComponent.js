import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {Badge} from '@rneui/themed';
const styles = StyleSheet.create({
  icon: {
    marginVertical: 20,
  },
});

export default ({handleOnPress, iconName, isBadgeNeeded, cartCount}) => {
  return (
    <Pressable
      onPress={handleOnPress}
      hitSlop={10}
      pressRetentionOffset={10}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#F3F3F3' : 'white',
        },
      ]}>
      {() => (
        <View>
          <Icon name={iconName} size={25} color="black" style={styles.icon} />
          <Badge
            value={cartCount}
            containerStyle={{position: 'absolute', top: 0, left: 0}}
          />
        </View>
      )}
    </Pressable>
  );
};
