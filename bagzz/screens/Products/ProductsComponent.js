import React, {useMemo} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Text,
} from 'react-native';

const style = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});

export default () => {
  const items = [{name: 'hi'}];
  const renderItem = item => <Text>{item.name}</Text>;
  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior={'height'}
      keyboardVerticalOffset={60}>
      <Text>Sveiki</Text>
    </KeyboardAvoidingView>
  );
};
