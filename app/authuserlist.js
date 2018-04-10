import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ListView,
  View,
  Dimensions,
  TouchableOpacity,
  Navigator
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const width = Dimensions.get('window').width

class Item extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      row: this.props.row
    };
  }

  render(){
    let row = this.state.row 
    return(
      <TouchableOpacity style={styles.ABox} >
        <View><Text style={styles.Text}>{row.time}</Text></View>
        <View><Text style={styles.Text}>{row.name}</Text></View>
      </TouchableOpacity>
      )
  }
}

class Authuserlist extends Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        {
            "name": "吳迪(002180)",
            "time": "網絡數據部"
        }
        ])
    }
  }

  _renderRow(row){
    return <Item row={row}/>
  }

  _renderFooter(){

  }

  _fetchMoreData(){
    
  }

  _renderHead(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>高級用戶列表</Text>
          <View style={styles.headerleftBTN}><Icon name='ios-arrow-back' size={30} onPress={this.props.back}/></View>
          <View style={styles.headerrightBTN}><Icon name='ios-search' size={30} /></View>
        </View>
      </View>
      )
  }

  render(){
    return(<View style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        renderHeader={this._renderHead.bind(this)}
        renderFooter={this._renderFooter.bind(this)}
        onEndReached={this._fetchMoreData.bind(this)}
        onEndReachedThreshold={20}
        enableEmptySections={true}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        />  
    </View>
    )
  }
}

export default class extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render(){
    return(
      <Navigator
        initialRoute={{ name: 'Authuserlist', component: Authuserlist }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.PushFromRight
        }}
        renderScene={(route, navigator) => {
          let Component = route.component
          return <Component {...route.params} navigator={navigator} back={() => this.props.navigator.pop()}/>
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
   header: {
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: '#00bfff',
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
  ABox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc'
  },
  Text: {
    fontSize: 20,
    paddingTop: 5,
  }
})