import React, { Component } from 'react';
import styles from '../stylesheets';
import { connect } from 'react-redux';
import { postStatus } from '../store/actions'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  Button,
  Alert,
  CameraRoll,
  ScrollView,
} from 'react-native';

class Profile extends Component<{}>{
  constructor(props){
    super(props);
    this.state = {
      photos:[],
      chooseUrl:''
    }
  }
  chooseImage(){
    CameraRoll.getPhotos({
       first: 20,
       assetType: 'All',
     })
     .then(r => {
       this.setState({ photos: r.edges });
     })
     .catch((err) => {
       alert(err);
     });
  }
  onPublicStatus(){
    this.props.dispatch(postStatus({ 'name':'Nguyễn Phúc','status':this.refs.statusInput._lastNativeText,'avatar':'https://i.imgur.com/cjQ1OsJ.jpg','time':'a few second ago','cover':this.state.chooseUrl }));
    alert('success public '+ this.refs.statusInput._lastNativeText)
  }
  render(){
    return  (
        <View style={{flex:1,backgroundColor:'grey'}}>
            <View style={styles.head}>
              <View style={{flex:1}}>
                <Image
                  style={{width:70,height:70,borderRadius:35}}
                  source={{uri:'https://i.imgur.com/cjQ1OsJ.jpg'}}
                 />
              </View>
              <View style={{flex:2,justifyContent:'center'}}>
                <Text style={{color:'#fff'}}>Nguyễn Phúc</Text>
                <Text style={{color:'yellow'}}>200.000 coin</Text>
              </View>
            </View>
            <TextInput
                ref = "statusInput"
                style ={{backgroundColor:'#fff'}}
                multiline = {true}
                numberOfLines = {4}
                placeholder = "what's on your mind? "
            />
            <Button onPress={this.chooseImage.bind(this)} title="chọn hình ảnh" />
            <View style={{marginTop:3}}>
              <Button onPress={this.onPublicStatus.bind(this)} title="Public status" />
            </View>
            <ScrollView>
             {this.state.photos.map((p, i) => {
               return (
                 <TouchableOpacity onPress={()=>{ this.setState({chooseUrl : p.node.image.uri })}}>
                   <View style={{padding:5,flex:1}}>
                     <Image
                       key={i}
                       style={{
                         width: 300,
                         height: 300,
                       }}
                       source={{ uri: p.node.image.uri }}
                     />
                   </View>
                 </TouchableOpacity>
               );
             })}
           </ScrollView>
        </View>
    )
  }
}

export default connect((state)=>state)(Profile);
