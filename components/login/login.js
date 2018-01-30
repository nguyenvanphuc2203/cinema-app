import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator
} from 'react-native';

export default class Login extends Component<{}>{
  constructor(props){
    super(props);
    setTimeout(()=>{
      this.props.navigation.navigate('Tabbar');
    },1500);
  }
  static navigationOptions = () => ({
    header: null
  })
  render(){
    return (
      <View style={styles.login}>
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHo1nidbz8u20u1QjbJoYk2B0-JcbwphKDzHHpsHFMPBWdBjP'}}
          />
        </View>
        <View style={{padding:10}}>
        <ActivityIndicator size="large" color="#026fd3" />
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  login:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  }
});
