import React,{ Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Friends from '../friends/friends';
import { FriendsRoute } from '../friends/friendsRoute'
import Profile from '../profile/profile';
import Chat from '../chat/chat';
import Newfeed from '../newfeed/newfeed';
import Drawermenu from '../drawerMenu/mainview';
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
      selectedTab:'cinema',
      numberMessage:4
    }
  }
  static navigationOptions = () => ({
    header: null
  })
  render(){
    return (
      <TabNavigator
        tabBarStyle={{backgroundColor:'#141417'}}
        >
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={require('../images/home_black.png')} />}
          renderSelectedIcon={() => <Image source={require('../images/home_green.png')} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Newfeed/>
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
          selected={this.state.selectedTab === 'cinema'}
          title="cinema"
          renderIcon={() => <Image style={{width:26,height:26}} source={require('../images/cinema_black.png')} />}
          renderSelectedIcon={() => <Image style={{width:26,height:26}} source={require('../images/cinema_red.png')} />}
          onPress={() => this.setState({ selectedTab: 'cinema' })}>
          <Drawermenu/>
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
          <Profile/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
