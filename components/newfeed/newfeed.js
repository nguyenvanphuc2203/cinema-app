import React, { Component } from 'react';
import styles from '../stylesheets';
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

class Newfeed extends Component<{}> {
  constructor(props){
    super(props);
  }
  static navigationOptions = () => ({
    title: 'Messenger',
    headerStyle:{ backgroundColor:'#026fd3'},
    headerTintColor: '#fff',
  })
  render() {
    return (
        <View style={styles.newfeedbox}>
          <FlatList
           data={this.props.status}
           renderItem={({item}) =>
               <View style={styles.news_newfeed}>
                   <View style={{flexDirection:"row"}}>
                     <View style={styles.avatar_newfeed}>
                         <Image
                         style={{borderRadius:25,width: 50, height: 50}}
                         source={{uri: item.avatar }}
                       />
                     </View>
                     <View style={styles.message_newfeed}>
                       <Text>{item.name}</Text>
                       <Text >{item.time}</Text>
                     </View>
                   </View>
                <View>
                    <Text style={{marginTop:5}}>{item.status}</Text>
                   <View style={styles.image_newfeed}>
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

export default connect(mapStateToProps)(Newfeed);
