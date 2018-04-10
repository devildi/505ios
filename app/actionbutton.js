import React, { Component } from 'react'
import { StyleSheet, 
  View ,
  Modal,
  Dimensions,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'

const width = Dimensions.get('window').width

export default class extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      modalVisible: false,
      content: '',
      submitState: 'down'
    };
  }

  _show(state){
    this.setState({submitState: state,modalVisible: true})
  }

  _close(){
    this.setState({modalVisible: false})
  }

  render() {
    return (
      <View>
        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this._show('up')} />
        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          transparent ={true}
        >
          <View style={styles.modalPage}>
            <View style={styles.closeBTN}>
              <Icon name={'ios-close-outline'} size={60} color={'#fff'} onPress={this._close.bind(this)}></Icon>
            </View>
            <View style={styles.commentBox}>
              <View>          
                <TextInput
                  placeholder={'上不去网了/我需要10米网线...'}
                  placeholderTextColor={'#fff'}
                  style={styles.content}
                  multiline={true}
                  defaultValue={this.state.content}
                  onChangeText={(text) => { this.setState({content: text})}}
                />
                <TouchableOpacity style={styles.submit}><Text style={styles.submitText}>提交</Text></TouchableOpacity>
              </View>
            </View>
            <View style={styles.footer}><Text style={styles.footertitle}>Powered by WUDI</Text></View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  modalPage: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  closeBTN: {
    paddingLeft: width / 2 - 10,
    paddingTop: 20,
    paddingBottom: 12
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
    height: 250
  },
  submit: {
    marginTop: 10,
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