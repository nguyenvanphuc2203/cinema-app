import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Home extends Component<{}> {
  constructor(props){
    super(props);
  }
  static navigationOptions = () => ({
      title: 'Messenger',
      headerStyle:{backgroundColor:'#026fd3'},
      headerTintColor: '#fff',
  })
  render() {
    return (
        <View style={friendStyle.messagebox}>
          <FlatList
           data={this.props.status}
           renderItem={({item}) =>

               <View style={friendStyle.news}>
                   <View style={{flexDirection:"row"}}>
                     <View style={friendStyle.avatar}>
                         <Image
                         style={{borderRadius:25,width: 50, height: 50}}
                         source={{uri: item.avatar }}
                       />

                     </View>
                     <View style={friendStyle.message}>
                       <Text>{item.name}</Text>
                       <Text >{item.time}</Text>
                     </View>
                   </View>
                <View>
                    <Text style={{marginTop:5}}>{item.status}</Text>
                   <View style={friendStyle.image}>
                     <Image
                     style={{ borderRadius:5,width: '100%', height:300}}
                     source={{uri: item.cover }} />
                   </View>
                </View>
               </View>
           }
         />
        </View>
    );
  }
}
function mapStateToProps(state){
  return { status : state.status };
}

export default connect(mapStateToProps)(Home);
var friendStyle = StyleSheet.create({
  messagebox:{
    flex:1,
    backgroundColor:'#e5e5e5'
  },
  news:{
    flexDirection:"column",
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
  image:{
    flex:4,
    marginTop:10,
    alignItems:'center'
  }
});
