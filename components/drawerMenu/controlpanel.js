import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

export default class ControlPanel extends Component{
  async logout(){
    try {
      await AsyncStorage.removeItem('@LoginMetiz:key');
      console.log('Logout !');
      alert('logout thành công!');
      this.props.navigation.navigate('Login')
    } catch (error) {
      console.log(error);
    }
  }
  render(){
    return (
      <View style={styles.control_main}>
        <View style={styles.control_profile}>
          <Image
          source={require('../images/metiz.png')}
          />
          <Button color="black" onPress={this.logout.bind(this)} title="Đăng xuất"/>
        </View>
        <View style={styles.control_menu_item}>
          <Text style={{color:'#fff'}}>Dashboard</Text>
        </View>
        <View style={styles.control_menu_item}>
          <Text style={{color:'#fff'}}>Popular</Text>
        </View>
        <View style={styles.control_menu_item}>
          <Text style={{color:'#fff'}}>Movies</Text>
        </View>
        <View style={styles.control_menu_item}>
          <Text style={{color:'#fff'}}>Infomation</Text>
        </View>
        <View style={styles.control_menu_item}>
          <Text style={{color:'#fff'}}>Setting</Text>
        </View>
        <View style={styles.control_menu_item}>
          <Text style={{color:'#fff'}}>About</Text>
        </View>
        <View style={styles.control_menu_item}>
          <Text style={{color:'#fff'}}>Help</Text>
        </View>
      </View>
    )
  }
}
