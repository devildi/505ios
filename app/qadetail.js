import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class extends Component {
	constructor() {
	  super()
	  this.state = {}
	}

	_backtoQalist(){
		this.props.navigator.pop()
	}

	render(){
		return( 
			<View style={styles.container}>
				<Text onPress={this._backtoQalist.bind(this)}>Q&A详情页面页面</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ee657c',
  },
})