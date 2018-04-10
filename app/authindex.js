import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native'

const width = Dimensions.get('window').width

import Icon from 'react-native-vector-icons/Ionicons'

import Undonelist from './undonelist'
import Donelist from './donelist'
import Userlist from './userlist'
import Authuserlist from './authuserlist'
import Materiallist from './materiallist'
import Graph from './graph'

export default class extends Component {

  _load(page){
    this.props.navigator.push({
      component: page
    })
  }

	render(){
		return( 
			<View style={styles.container}>
				<View style={styles.closeBTN}><Icon name={'ios-close-outline'} size={60} color={'white'} onPress={this.props.close}></Icon></View>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>維護信息</Text>
				</View>
				<View style={styles.itemContainer}>
					<TouchableOpacity style={styles.item} onPress={() => this._load(Undonelist)}><Text style={styles.itemTitle}>未  完  成</Text></TouchableOpacity>
					<TouchableOpacity style={styles.item} onPress={() => this._load(Donelist)}><Text style={styles.itemTitle}>已  完  成</Text></TouchableOpacity>
					<TouchableOpacity style={styles.item} onPress={() => this._load(Materiallist)}><Text style={styles.itemTitle}>領取記錄</Text></TouchableOpacity>
					<TouchableOpacity style={styles.item} onPress={() => this._load(Userlist)}><Text style={styles.itemTitle}>普通用戶</Text></TouchableOpacity>
					<TouchableOpacity style={styles.item} onPress={() => this._load(Authuserlist)}><Text style={styles.itemTitle}>高級用戶</Text></TouchableOpacity>
					<TouchableOpacity style={styles.item} onPress={() => this._load(Graph)}><Text style={styles.itemTitle}>圖        表</Text></TouchableOpacity>
				</View>
				<View style={styles.footer}><Text style={styles.footertitle}>Powered by WUDI</Text></View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  closeBTN: {
  	paddingLeft: 30,
  	paddingTop: 40,
  	paddingBottom: 12
  },
  titleContainer: {
  	borderBottomWidth: 1,
  	borderBottomColor: '#808A87',
  	paddingBottom: 20,
  },
  title: {
  	textAlign: 'center',
  	fontSize: 25,
  	color: '#fff',
  },
  itemContainer: {
  	paddingTop: 40,
  },
  item: {
  	paddingTop: 20,
  },
  itemTitle: {
  	textAlign: 'center',
  	fontSize: 40,
  	color: '#fff',
  },
  footertitle: {
  	textAlign: 'center',
  	fontSize: 10,
  	color: '#fff',
  },
  footer: {
  	position: 'absolute',
  	paddingBottom: 10,
  	right: 0,
  	bottom: 0,
  	width: width,
  }
})