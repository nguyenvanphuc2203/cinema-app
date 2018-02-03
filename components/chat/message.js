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
              <View style={styles.row_message}>
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
