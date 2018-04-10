import React, { Component } from 'react'
import {
  Navigator
} from 'react-native'



import Authindex from './authindex'


export default class extends Component {
	constructor() {
	  super()
	  this.state = {}
	}

	render(){
		return( 
      <Navigator
        initialRoute={{ name: 'authindex', component: Authindex }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.PushFromRight
        }}
        renderScene={(route, navigator) => {
          let Component = route.component
          return <Component {...route.params} navigator={navigator} close={this.props.closeDrawer}/>
        }} 
      />
		)
	}
}