import React from 'react';
import PressableIconComponent from './PressableIconComponent';

export default ({onPress, iconName, isBadgeNeeded, cartCount}) => {
  return (
    <PressableIconComponent
      handleOnPress={onPress}
      iconName={iconName}
      isBadgeNeeded={isBadgeNeeded}
      cartCount={cartCount}
    />
  );
};
