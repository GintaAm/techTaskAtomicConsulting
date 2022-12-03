import React from 'react';

import {
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
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

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <PressableIcon
          iconName="home"
          // onPress={() => na)}
        />
        <PressableIcon
          iconName="search"
          // onPress={() => na)}
        />
        <PressableIcon
          iconName="heart"
          // onPress={() => na)}
        />
        <PressableIcon
          iconName="cart"
          // onPress={() => na)}
        />
      </View>
    </View>
  );
};
