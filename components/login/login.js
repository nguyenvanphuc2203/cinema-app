import React, { Component } from 'react';
import styles from '../stylesheets';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      sdt:'0964357189',
      password:'admin',
      isLogin:false
    }
  }
  async componentWillMount(){
    //check login
    try {
      const value = await AsyncStorage.getItem('@LoginMetiz:key');
        if (value !== null){
          console.log('Check login thành công! '+value);
          this.setState({isLogin:true});
          setTimeout(()=>{
            this.props.navigation.navigate('Tabbar');
          },600);
        }
      } catch (error) {
        console.log(error);
      }
  }
  static navigationOptions = () => ({
    header: null
  })
  async _login(){
    var sdt = this.refs.sdt._lastNativeText;
    var password = this.refs.password._lastNativeText;

    if ( sdt === this.state.sdt && password === this.state.password )
      {
        try {
          await AsyncStorage.setItem('@LoginMetiz:key', 'Logged');
          this.props.navigation.navigate('Tabbar');
        } catch (error) {
          console.log(error)
        }
      }
    else alert('lỗi đăng nhập');
  }
  render(){
    if ( this.state.isLogin ) return (
      <View style={styles.login}>
        <View style={{alignItems:'center'}}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../images/logo.png')}
          />
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </View>
    )
    else
    return (
      <View style={styles.login}>
        <View style={{alignItems:'center'}}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../images/logo.png')}
          />
        </View>
        <View style={{paddingLeft:40,paddingRight:40}}>
          <TextInput
          style={{borderWidth:1,borderColor:'black',backgroundColor:'#fff'}}
          placeholder="nhập số điện thoại"
          ref="sdt" />
          <TextInput
          style={{borderWidth:1,borderColor:'black',backgroundColor:'#fff'}}
          placeholder="password"
          secureTextEntry={true}
          ref="password" />
          <Button onPress={this._login.bind(this)} title="Login"/>
        </View>
      </View>
    );
  }
}
