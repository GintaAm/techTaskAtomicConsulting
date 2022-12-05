import React from 'react';

import {StyleSheet, View} from 'react-native';
import PressableIcon from '../PressableIcon';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  innerView: {
    flex: 1,
    width: '85%',
    borderRadius: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ({cartCount, onCartPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <PressableIcon iconName="home" />
        <PressableIcon iconName="search" />
        <PressableIcon iconName="heart" />
        <PressableIcon
          iconName="cart"
          isBadgeNeeded={true}
          cartCount={cartCount}
          onPress={onCartPress}
        />
      </View>
    </View>
  );
};
