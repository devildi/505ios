'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  AlertIOS,
  AsyncStorage
} from 'react-native'

import Network from '../config/network'
import Config from '../config/config'

const width = Dimensions.get('window').width

import Icon from 'react-native-vector-icons/Ionicons'

export default class extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	step: '1',
	  	name: null,
	  	employeeID: null,
	  	code: null,
	  	phoneNum: null,
	  	address: null,
	  	department: null
	  };
	}

	_back(){
		this.props.navigator.pop()
	}

	_next(){
		const that = this
		if(!this.state.name || !this.state.employeeID || !this.state.code){
			return AlertIOS.alert('您有未填項')
		} 
		Network.get('http://127.0.0.1:3000/api/u/validity',{employeeID:this.state.employeeID})
		.then(function(data){
			console.log(data)
			if (data.user) {
				AlertIOS.alert('此工號已註冊，請直接登錄')
			} else {
				that.setState({step: '2'})
			}
		})
		.catch((err) => {
        AlertIOS.alert('網絡出錯，請重試！')
    })
	}

	_submit(){
		const that = this
    const body = {
    	name: this.state.name,
      employeeID: this.state.employeeID,
      code: this.state.code,
      phoneNum: this.state.phoneNum,
      address: this.state.address,
      department: this.state.department
    }
    Network.post('http://127.0.0.1:3000/api/u/signup',body)
    .then(function(data){

    })
    .catch((err) => {
        AlertIOS.alert('網絡出錯，請重試！')
    })
	}

	render(){
		return(
			<View style={styles.container}>   
        <View style={styles.header}>
          <Text style={styles.headerTitle}>註冊</Text>
        </View>
        <View style={styles.commentBox}>
	        {
	        	this.state.step === '1'
	        ? <View>    
						<TextInput
	            placeholder={'姓名'}
	            placeholderTextColor={'#fff'}
	            style={styles.content}
	            defaultValue={this.state.name}
	            onChangeText={(text) => {
	              this.setState({
	                name: text
	              })
	            }}
	          />
	          <TextInput
	            placeholder={'工號'}
	            placeholderTextColor={'#fff'}
	            style={styles.content}
	            defaultValue={this.state.employeeID}
	            onChangeText={(text) => {
	              this.setState({
	                employeeID: text
	              })
	            }}
	          />
	          <TextInput
	            placeholder={'密碼'}
	            placeholderTextColor={'#fff'}
	            style={styles.content}
	            defaultValue={this.state.code}
	            onChangeText={(text) => {
	              this.setState({
	                code: text
	              })
	            }}
	          />
	        </View>
	        : <View>          
						<TextInput
	            placeholder={'聯繫方式'}
	            placeholderTextColor={'#fff'}
	            style={styles.content}
	            defaultValue={this.state.phoneNum}
	            onChangeText={(text) => {
	              this.setState({
	                phoneNum: text
	              })
	            }}
	          />
	          <TextInput
	            placeholder={'地址'}
	            placeholderTextColor={'#fff'}
	            style={styles.content}
	            defaultValue={this.state.address}
	            onChangeText={(text) => {
	              this.setState({
	                address: text
	              })
	            }}
	          />
	          <TextInput
	            placeholder={'部門'}
	            placeholderTextColor={'#fff'}
	            style={styles.content}
	            defaultValue={this.state.department}
	            onChangeText={(text) => {
	              this.setState({
	                department: text
	              })
	            }}
	          />
	        </View>
	        }
	         
	          {
	          this.state.step === '1'
						? <TouchableOpacity style={styles.submit} onPress={this._next.bind(this)}><Text style={styles.submitText}>下一步</Text></TouchableOpacity>
	          : <TouchableOpacity style={styles.submit} onPress={this._submit.bind(this)}><Text style={styles.submitText}>註冊</Text></TouchableOpacity>
	          }            
	      </View>
	      <View style={styles.baseBox}>
        	<View style={styles.base}><Text style={styles.baseText}>登錄</Text></View>
        </View>
	      <View style={styles.footer}><Text style={styles.footertitle}>Powered by WUDI</Text></View>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29232C'
  },
  header: {
    paddingTop: 30,
    paddingBottom: 50,

  },
  headerTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff'
  },
  baseBox: {
  	flexDirection: 'row',
  	justifyContent: 'center',
  },
  base: {
  	padding: 5,
  },
  baseText: {
  	fontSize: 15,
  	color: '#fff'
  },
  submit: {
    marginTop: 20,
    backgroundColor: '#ffd700',
    height: 50,
    marginLeft: 1,
    marginRight: 1,
    borderWidth: 1,
    borderColor: '#352D37',
    borderRadius: 4,
  },
  submitText: {
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
    paddingTop: 7
  },
  commentBox: {
    marginTop: 5,
    marginBottom: 10,
    padding: 4,
    width: width
  },
  content: {
    padding: 10,
    color: '#fff',
    borderWidth: 2,
    borderColor: '#352D37',
    backgroundColor: '#251F28',
    borderRadius: 4,
    fontSize: 20,
    height: 60,
    marginBottom: 5
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