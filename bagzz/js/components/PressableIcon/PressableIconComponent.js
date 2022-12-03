import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  icon: {
    marginVertical: 20,
  },
});

export default ({handleOnPress, iconName}) => {
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
        <Icon name={iconName} size={25} color="black" style={styles.icon} />
      )}
    </Pressable>
  );
};
