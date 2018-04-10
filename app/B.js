import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
  Image,
  Modal
} from 'react-native'

const width = Dimensions.get('window').width

export default class extends Component {
	constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([{
            "name": "汉字汉字汉字汉字",
            "time": "04:43:09",
            "title": "Dvezh Yorjcx Iyirjxkhf"
        },
        {
            "name": "汉字",
            "time": "07:50:50",
            "title": "Ihnixckin Lwlpyibqx Asd"
        },
        {
            "name": "汉字",
            "time": "16:26:49",
            "title": "Ucxzoz Coex Kelhec Fodmnw Oaeo Cyoccyevyi"
        },
        {
            "name": "汉字汉字汉字汉字",
            "time": "10:02:31",
            "title": "Slvuwlijwu Dkmqdf Ttojj Hscfeyyj"
        },
        {
            "name": "汉字汉字汉字汉字",
            "time": "22:12:56",
            "title": "Wfjmnelx Phf Kbgw Rshem"
        },
        {
            "name": "汉字汉字",
            "time": "10:12:58",
            "title": "Noibf Nkucfye Wszkckd Vuuq Qugopxzev Lfppl"
        },
        {
            "name": "汉字汉字汉字",
            "time": "10:27:46",
            "title": "Bkljppkb Fqajnxd Dghljbpcqr Brdmlrzn Poxp Ojutgtlmh"
        }])
    }
  }

  _backtoQalist(){
      this.props.navigator.pop()
    }

  _renderRow(row){
    return(
      <View style={styles.ABox} >
        <View style={styles.ALeft}><Text style={styles.ALeftText}>{row.time}</Text></View>
        <View style={styles.ARight}>
          <Text>{row.title}</Text>
          <Text>處理人：{row.name}</Text>
        </View>
      </View>
    )
  }

  _renderFooter(){

  }

  _fetchMoreData(){
    
  }

  render(){
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        renderFooter={this._renderFooter.bind(this)}
        onEndReached={this._fetchMoreData.bind(this)}
        onEndReachedThreshold={20}
        enableEmptySections={true}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
      />
    )
  }
}

const styles = StyleSheet.create({
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