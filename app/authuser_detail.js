import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  Image,
  Modal,
  Navigator
} from 'react-native'

const width = Dimensions.get('window').width

import Icon from 'react-native-vector-icons/Ionicons'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import Config from '../config/config'
import A from './A'
import B from './B'
import UserChange from './userChange'

class User extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      Visible: false
    };
  }

  _load(){
    this.props.navigator.push({
      component: UserChange
    })
  }

  render(){
    return( 
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerleftBTN}><Icon name='ios-arrow-back' size={30} onPress={this.props.closeDrawer}/></View>
          <View style={styles.headerrightBTN}><Text style={styles.logout} onPress={this._load.bind(this)}>修改</Text></View>
        </View>
        <View style={styles.baseBox}>
          <View style={styles.base}><Text style={styles.baseText}>吳迪</Text></View>
          <View style={styles.base}><Text style={styles.baseText}>002180</Text></View>
        </View>
        <View style={styles.baseBox}>
          <View style={styles.base}><Text style={styles.baseText}>吳迪</Text></View>
          <View style={styles.base}><Text style={styles.baseText}>002180</Text></View>
        </View>
        <View style={styles.userPageBody}>
          <ScrollableTabView>
            <A tabLabel="維修記錄" />
            <B tabLabel="耗材申請記錄" />
          </ScrollableTabView>
        </View>
      </View>
    )
  }
}

export default class extends Component {
	render(){
    return( 
      <Navigator
        initialRoute={{ name: 'User', component: User }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FloatFromBottom
        }}
        renderScene={(route, navigator) => {
          let Component = route.component
          return <Component {...route.params} navigator={navigator} closeDrawer={this.props.closeDrawer}/>
        }} 
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerBox: {
  	height: 300,
  	backgroundColor: '#ee735c',
  },
  header: {
    paddingTop: 25,
    paddingBottom: 12,
  },
  headerleftBTN: {
    position: 'absolute',
    left: 20,
    top: 30,
  },
  headerrightBTN: {
    position: 'absolute',
    right: 20,
    top: 30,
  },
  logout: {
    fontSize: 20,
    marginTop: 7
  },
  userPageBody: {
  	flex: 1
  },
  headerAvatar: {
  	marginTop: 30,
  	flexDirection: 'row',
  	justifyContent: 'center'
  },
  avatar: {
  	height: 140,
  	width: 140,
  	borderRadius: 70
  },
  headerTitle: {
  	flex: 1,
  	marginBottom: 5,
  },
  title: {
  	textAlign: 'center',
  	color: '#fff',
  	fontSize: 25,
  	paddingTop: 10
  },
  baseBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})