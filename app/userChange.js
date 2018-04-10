import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native'



const width = Dimensions.get('window').width

import Icon from 'react-native-vector-icons/Ionicons'

export default class extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	_back(){
		this.props.navigator.pop()
	}

	render(){
		return(
			<View style={styles.container}>   
        <View style={styles.header}>
          <View style={styles.headerleftBTN}><Icon name='ios-close-outline' size={40} color={'#fff'} onPress={this._back.bind(this)}/></View>
          <View style={styles.headerrightBTN}><Text style={styles.logout}>退出登錄</Text></View>
        </View>
        <View style={styles.baseBox}>
        	<View style={styles.base}><Text style={styles.baseText}>吳迪</Text></View>
        	<View style={styles.base}><Text style={styles.baseText}>002180</Text></View>
        </View>
        <View style={styles.commentBox}>
	        <View>          
						<TextInput
	            placeholder={'您的聯繫方式...'}
	            placeholderTextColor={'#fff'}
	            style={styles.content}
	            defaultValue={this.state.content}
	            onChangeText={(text) => {
	              this.setState({
	                content: text
	              })
	            }}
	          />
	          <TextInput
	            placeholder={'您的辦公地址...'}
	            placeholderTextColor={'#fff'}
	            style={styles.content}
	            defaultValue={this.state.content}
	            onChangeText={(text) => {
	              this.setState({
	                content: text
	              })
	            }}
	          />
            <TextInput
              placeholder={'您的部门...'}
              placeholderTextColor={'#fff'}
              style={styles.content}
              defaultValue={this.state.department}
              onChangeText={(text) => {
                this.setState({
                  content: text
                })
              }}
            />
	          <TouchableOpacity style={styles.submit}><Text style={styles.submitText}>保存修改</Text></TouchableOpacity>
	        </View>
	      </View>
	      <View style={styles.footer}><Text style={styles.footertitle}>Powered by WUDI</Text></View>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  header: {
  	height: 80,
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
    padding: 1,
  },
  logout: {
    fontSize: 20,
    marginTop: 7,
    color: '#fff'
  },
  baseBox: {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  },
  base: {
  	padding: 20,
  },
  baseText: {
  	fontSize: 30,
  	color: '#fff'
  },
  submit: {
    marginTop: 20,
    backgroundColor: '#dcdcdc',
    height: 50,
    marginLeft: 1,
    marginRight: 1,
    borderWidth: 1,
    borderColor: '#ddd',
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
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 4,
    fontSize: 20,
    height: 50,
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