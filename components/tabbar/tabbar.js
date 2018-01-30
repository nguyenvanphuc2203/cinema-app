import React,{ Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Friends from '../friends/friends';
import { FriendsRoute } from '../friends/friendsRoute'
import Menu from '../menu/menu';
import Chat from '../chat/chat';
import Home from '../home/home';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

export default class Tabbar extends Component<{}>{
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'home',
      numberMessage:4
    }
  }
  static navigationOptions = () => ({
    header: null
  })
  render(){
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={require('../images/home_black.png')} />}
          renderSelectedIcon={() => <Image source={require('../images/home_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'friends'}
          title="friends"
          renderIcon={() => <Image source={require('../images/friends_black.png')} />}
          renderSelectedIcon={() => <Image source={require('../images/friends_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'friends' })}>
          <FriendsRoute/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'notification'}
          title="notification"
          renderIcon={() => <Image source={require('../images/noti_black.png')} />}
          renderSelectedIcon={() => <Image source={require('../images/noti_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'notification' })}>
          <FriendsRoute/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'message'}
          title="message"
          badgeText={this.state.numberMessage}
          renderIcon={() => <Image source={require('../images/message_black.png')} />}
          renderSelectedIcon={() => <Image source={require('../images/message_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'message',numberMessage:0 })}>
          <Chat/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={require('../images/profile_black.png')} />}
          renderSelectedIcon={() => <Image source={require('../images/profile_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <Menu/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
