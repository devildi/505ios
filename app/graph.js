import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class Undonelist extends Component {
	constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([])
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
          <Text style={styles.headerTitle}>圖表</Text>
          <View style={styles.headerleftBTN}><Icon name='ios-arrow-back' size={30} onPress={()=>this.props.navigator.pop()}/></View>
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
    backgroundColor: '#5f9ea0',
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
})