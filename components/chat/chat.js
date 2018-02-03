import React, { Component } from 'react';
import styles from '../stylesheets';
import Input from './input';
import Message from './message';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

export default class Chat extends Component<{}> {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.user,
    headerStyle:{backgroundColor:'#026fd3'},
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity onPress={()=>{navigation.navigate('About')}} >
      <Image
      style={{width: 20, height: 20,margin:20}}
      source={{uri:'http://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/24/information-icon.png'}}
      title="About" />
      </TouchableOpacity>
    )
  });
  render() {
    return (
        <View style={styles.container}>
          <Message/>
          <Input/>
        </View>
    );
  };
}
