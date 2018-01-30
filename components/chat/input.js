import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  }
  onPressSend(){
    this.props.dispatch({type:'SEND', item: {'name':'Nguyễn Phúc','message': this.refs.messageInput._lastNativeText}});
  }
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
  }
}
function mapStateToProps(state){
  return { input : state };
}


export default connect(mapStateToProps)(Input);

var styles = StyleSheet.create({
  inputbox:{
    flex:2/8
  },
  row:{
    flex:1,
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center'
  },
  input_text:{
    flex:4
  },
  input_send:{
    flex:1
  }
});
