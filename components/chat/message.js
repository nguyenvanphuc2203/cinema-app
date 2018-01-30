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
  ScrollView
} from 'react-native';

class Message extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      message : [
        {'name':'Phúc','message':'hello man'},
        {'name':'Nam','message':'have nice day!'},
      ]
    }
  }
  render() {
    return (
        <ScrollView style={styles.messagebox}>
          {
            this.props.mymessage.map((word) =>
              <View style={styles.row}>
                <TouchableOpacity>
                  <View style={styles.avatar}>
                      <Image
                      style={{borderRadius:25,width: 50, height: 50}}
                      source={{uri: 'https://i.imgur.com/cjQ1OsJ.jpg'}}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.message}>
                  <Text>{word.name}</Text>
                  <Text >{word.message}</Text>
                </View>
              </View>
            )
          }
        </ScrollView>
    );
  }
}

function mapStateToProps(state){
  return { mymessage : state.chat };
}

export default connect(mapStateToProps)(Message);

var styles = StyleSheet.create({
  messagebox:{
    flex:5/8,
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
    flex:1,
  },
  message:{
    flex:4,
    justifyContent:'center',
    padding:5
  }
});
