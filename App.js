import React, { Component } from 'react';
import { HomeStack } from './components/Router';
import { Provider } from 'react-redux';
import store from './components/store';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store} >
          <HomeStack/>
      </Provider>
    );
  }
}
