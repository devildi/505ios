'use strict'

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native'

import AcBTN from './actionbutton'
import Qalist from './qalist'
import User from './user'
import Header from './header'
import Authuser from './authuser'

export default class Index extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	openDrawer(state){
		this.props.open(state)
	}

	render(){
		return(
			<View style={styles.container}>
	      <Header onSelect={this.openDrawer.bind(this)}/>
	      <Navigator
	        initialRoute={{ name: 'qalist', component: Qalist }}
	        configureScene={(route) => {
	          return Navigator.SceneConfigs.FloatFromRight
	        }}
	        renderScene={(route, navigator) => {
	          let Component = route.component
	          return <Component {...route.params} navigator={navigator} />
	        }} 
	      />
	      <AcBTN />
	    </View>
		) 
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})