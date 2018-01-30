import React, { Component } from 'react';
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
      access_token:'EAACEdEose0cBAOoVW9PCZBTpc4vXGtwZC3uZAxJ5ZBprpV5ODZAanXDGfaBHYGUjAKGgxjBvx9UUZAZCUtdZAVsAdhLEaN6kVSYZCF0sY8xA3ZAQju9Ll3eGfLl4lMSIezZBmHyLdZBcC0PbNPirdIZBQiJyZBR0fNIA7cWH3TwGzsVslKnnBY5mqrRxi6bZAKPDrT9DnsZD'
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
      alert(error);
    });
  }
  render() {
    return (
        <View style={friendStyle.messagebox}>
          <FlatList
           data={this.state.message}
           renderItem={({item}) =>
             <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Chat',{ user:item.name })}}>
               <View style={friendStyle.row}>
                   <View style={friendStyle.avatar}>
                       <Image
                       style={{borderRadius:25,width: 50, height: 50}}
                       source={{uri: item.cover.source}}
                     />
                   </View>
                 <View style={friendStyle.message}>
                   <Text>{item.name}</Text>
                   <Text >{item.id}</Text>
                 </View>
                 <View style={friendStyle.online}>
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
var friendStyle = StyleSheet.create({
  messagebox:{
    flex:1,
    backgroundColor:'#e5e5e5'
  },
  row:{
    flexDirection:"row",
    flex:1,
    marginTop:5,
    padding:10,
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:3,
    backgroundColor:'#fff'
  },
  avatar:{
    flex:2/10,
  },
  message:{
    flex:7/10
  },
  online:{
    flex:1/10,
    alignItems:'center'
  }
});
