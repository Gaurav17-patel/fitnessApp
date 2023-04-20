import React from 'react';
import {MainStackNavigator} from './MainStackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigation;
