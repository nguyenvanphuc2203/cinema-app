import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './home';
import Item from './item';

export const MainRoute = StackNavigator({
  Home: { screen: Home},
  Item: { screen: Item }
});
