import React from 'react';
import { StackNavigator } from 'react-navigation';
import Friends from './friends';
import Chat from '../chat/chat';
import About from '../about';

export const FriendsRoute = StackNavigator({
  Friends: { screen: Friends},
  Chat: { screen: Chat },
  About: { screen: About }
});
