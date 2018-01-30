import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './login/login';
import Chat from './chat/chat';
import Tabbar from './tabbar/tabbar';
import Home from './home/home';
import About from './about';
import Friends from './friends/friends';

export const HomeStack = StackNavigator({

  Login:{ screen: Login },
  Tabbar : { screen: Tabbar },
  Home : { screen : Home },
  Friends: { screen: Friends},
  Chat: { screen: Chat },
  About: { screen: About }
});
