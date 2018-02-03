import React, { Component } from 'react';
import styles from '../stylesheets';
import { connect } from 'react-redux';
import { sendMessage } from '../store/actions';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

class Input extends Component<{}> {
  constructor(props){
    super(props);
  };
  onPressSend(){
    this.props.dispatch(sendMessage({'name':'Nguyễn Phúc','message': this.refs.messageInput._lastNativeText}));
  };
  render() {
    return (
      <View style={styles.inputbox}>
        <View style={styles.row}>
          <View style={styles.input_text}>
            <TextInput
            style={{borderColor:'grey'}}
            placeholder="Type here send!"
            ref="messageInput" />
          </View>
          <View style={styles.input_send}>
            <Button onPress={this.onPressSend.bind(this)} title="send" />
          </View>
        </View>
     </View>
    );
  };
}
function mapStateToProps(state){
  return { input : state };
}

export default connect(mapStateToProps)(Input);
