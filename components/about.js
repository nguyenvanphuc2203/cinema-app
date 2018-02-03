import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Modal
} from 'react-native';

export default class About extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'About',
    headerTintColor: 'black',
  })
  render() {
    return (
        <View style={styles.row_about}>
          <View style={styles.number_about}>
            <ActivityIndicator size="small" color="#026fd3" />
              <Text></Text>
              <Text></Text>
            <Button onPress={()=>{}} title="Go to Chat" />
          </View>
        </View>
    );
  }
}
