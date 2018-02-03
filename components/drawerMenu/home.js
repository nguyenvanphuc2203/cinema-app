import React, { Component } from 'react';
import styles from '../stylesheets';
import Drawer from 'react-native-drawer';
import ControlPanel from './controlpanel';
import Swiper from 'react-native-swiper';
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default class Homeview extends Component{
  constructor(props){
    super(props);
    this.state = {
      popular: [
        { 'name' :'ĐẢO ĐỊA NGỤC', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':''},
        { 'name' :'ANABELLA', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':''},
        { 'name' :'JUMANJI', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':''},
        { 'name' :'HOANG ĐẢO', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':''},
        { 'name' :'TỬ TÙ', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':''}
      ]
    }
  }
  static navigationOptions = () => ({
      header:null
  })
  render(){
    return (
          <View style={styles.content_view}>
            {/* <!-- image slider --> */}
              <View style={styles.slider_swiper}>
                <Swiper
                  style={styles.wrapper}
                  autoplay={true}
                  showsButtons={true}>
                  <View style={styles.slide1}>
                    <Image
                    style={styles.image_swiper}
                    source={require('../images/banner_film1.jpg')}
                    />
                  </View>
                  <View style={styles.slide2}>
                    <Image
                    style={styles.image_swiper}
                    source={require('../images/banner_film2.jpg')}
                    />
                  </View>
                  <View style={styles.slide3}>
                    <Image
                    style={styles.image_swiper}
                    source={require('../images/banner_film3.jpg')}
                    />
                  </View>
                </Swiper>
              </View>
              {/* <!-- popular --> */}
              <View style={styles.control_menu_item}>
                <Text style={{color:'#fff'}}>Popular</Text>
              </View>
              <View style={{flex:1.8/3}}>
                <FlatList
                data={this.state.popular}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Item',{ name:item.name,description:item.description})}}>
                  <View style={styles.popular_item}>
                    <View >
                      <Image
                      style={{width:100,height:200,flex: 1,resizeMode: 'contain'}}
                      source={require('../images/banner_film3.jpg')}
                      />
                    </View>
                    <View style={{justifyContent:'center',paddingLeft:10}}>
                      <Text style={{color:'#fff'}}>{item.name}</Text>
                      <Text style={{color:'#fff'}}>{item.description}</Text>
                    </View>

                  </View>
                </TouchableOpacity>
                }
                />
              </View>
        </View>
    );
  }
}
