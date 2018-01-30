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
        <View style={styles.row}>
          <View style={styles.number}>
            <ActivityIndicator size="small" color="#026fd3" />
            <Text></Text>
            <Text></Text>
            <Button onPress={()=>{this.props.navigation.navigate('DrawerOpen')}} title="Go to Chat" />
          </View>
        </View>
    );
  }
}
var styles = StyleSheet.create({
  row:{
    flex:1,
    flexDirection:"row",
    borderBottomColor:'grey',
    borderBottomWidth:2,
  },
  number:{
    flex:1,
    borderRightColor:'grey',
    borderRightWidth:2,
    justifyContent:'center',
    alignItems:'center',
  }
});
