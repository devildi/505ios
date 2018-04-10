import React, { Component } from 'react'
import {
  AppRegistry,
  Dimensions
} from 'react-native'

const width = Dimensions.get('window').width

import SideMenu from 'react-native-side-menu'

import Index from './app/index'
import Authuser from './app/authuser'
import User from './app/user'
import Wel from './app/welcome'

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuPosition: 'right',
      isOpen: false,
      user: null
    }
  }

  _openDrawer(state){
    if(state === 'left') {
      this.setState({menuPosition: 'left'}, function(){this.setState({isOpen: true})})
    } else {
      this.setState({menuPosition: 'right'}, function(){this.setState({isOpen: true})})
    }
  }

  render() {
    if(!this.state.user){
      return <Wel/>
    }
    
    return (
        <SideMenu 
          bounceBackOnOverdraw={false}
          menuPosition={this.state.menuPosition}
          isOpen={this.state.isOpen}
          openMenuOffset={width}
          disableGestures={true}
          menu={
            this.state.menuPosition === 'left'
            ? <Authuser closeDrawer={() => {this.setState({isOpen: false})}}/>
            : <User closeDrawer={() => {this.setState({isOpen: false})}}/>
          }
        >
          <Index open={this._openDrawer.bind(this)}/>
        </SideMenu>  
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
