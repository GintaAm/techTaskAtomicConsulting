import React from 'react';
import PressableIconComponent from './PressableIconComponent';

export default ({onPress, iconName}) => {
  return <PressableIconComponent handleOnPress={onPress} iconName={iconName} />;
};
