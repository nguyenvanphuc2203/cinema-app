import React, { Component } from 'react';
import styles from '../stylesheets';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList
} from 'react-native';

export default class Friends extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      message : [
        { 'name':'Nguyễn Phúc','id':'hello man','cover':'', 'is_online':true },
        { 'name':'Phan văn Đức','id':'have nice day!','cover':'', 'is_online':false },
        { 'name':'Bùi Tiến Dũng','id':'Congratulate!', 'cover':'','is_online':false },
      ],
      access_token:'EAACEdEose0cBAKgPpluk2UZAx6EYMP2VZBfTdUUg6Ga1GAV2EhhO2FnzZB7v953BaaVfvfiXvvlYOZA9Hkn6Wzrk4SN7vBXnZAUzgSUpA6DxHFkIXOX1C3cwFTSSnfYjCfTkiFxhPd0wTPxWyOjQ3KyzXhER1Nzo8iP6qqomC8nF98myrrEcdOgSyIDwmi9QZD'
    };
  }
  static navigationOptions = () => ({
      title: 'Messenger',
      headerStyle:{backgroundColor:'#026fd3'},
      headerTintColor: '#fff',
      header:null
  })
  componentWillMount(){
    fetch('https://graph.facebook.com/me?fields=id,name,friends{cover,name}&access_token='+this.state.access_token)
    .then((response) => response.json())
    .then((responseJson) => {
      this.state.message = responseJson.friends.data ;
      this.setState(this.state.message);
    })
    .catch((error) => {
      alert('token hết hạn, vui lòng get lai');
    });
  }
  render() {
    return (
        <View style={styles.friendbox}>
          <FlatList
           data={this.state.message}
           renderItem={({item}) =>
             <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Chat',{ user:item.name })}}>
               <View style={styles.row_friend}>
                   <View style={styles.avatar_friend}>
                       <Image
                       style={{borderRadius:25,width: 50, height: 50}}
                       source={{uri: item.cover.source}}
                     />
                   </View>
                 <View style={styles.message_friend}>
                   <Text>{item.name}</Text>
                   <Text >{item.id}</Text>
                 </View>
                 <View style={styles.online_friend}>
                   <Image
                   style={{ borderRadius:5,width: 10, height: 10}}
                   source={{uri:'http://www.clker.com/cliparts/N/G/g/v/d/N/glossy-red-icon-button-md.png'}} />
                </View>
               </View>
             </TouchableOpacity>
           }
         />
        </View>
    );
  }
}
