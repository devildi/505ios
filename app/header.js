import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class Header extends Component {
	constructor() {
	  super()
	  this.state = {
      right: 'right'
    }
	}

  _onSelect(state){
    this.props.onSelect(state)
  }

	render(){
		return( 
			<View style={styles.header}>
        <Text style={styles.headerTitle}>LNTV运维中心</Text>
        <View style={styles.headerrightBTN}><Icon name='ios-menu' size={30} onPress={() => this._onSelect('right')}/></View>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: '#ffd700',
  },
  headerTitle: {
    fontSize: 30,
    textAlign: 'center',
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
})