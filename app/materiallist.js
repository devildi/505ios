import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ListView,
  View,
  Dimensions
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
      <View style={styles.ABox} >
        <View style={styles.ALeft}><Text style={styles.ALeftText}>{row.time}</Text></View>
        <View style={styles.ARight}>
          <Text>{row.title}</Text>
          <Text>{row.name}</Text>
        </View>
      </View>
      )
  }
}

export default class Undonelist extends Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        {
            "name": "吳迪-網絡數據部-13434434343",
            "time": "07:50:50",
            "title": "網線2米"
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
          <Text style={styles.headerTitle}>耗材領取記錄</Text>
          <View style={styles.headerleftBTN}><Icon name='ios-arrow-back' size={30} onPress={()=>this.props.navigator.pop()}/></View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
   header: {
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: '#6495ed',
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
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc'
  },
  ALeft: {
    width: width / 4,
  },
  ALeftText: {
    fontSize: 20,
    paddingTop: 5,
  }
})