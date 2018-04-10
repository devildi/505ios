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
        <View style={styles.ALeft}><Text style={styles.Text}>{row.time}</Text></View>
        <View style={styles.ALeft}>
          <Text style={styles.Text}>{row.name}</Text>
        </View>
        <View style={styles.ALeft}>
          <Text style={styles.Text}>{row.title}</Text>
        </View>
      </TouchableOpacity>
      )
  }
}

class Undonelist extends Component {
	constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        {
            "name": "吳迪",
            "time": "10:27:46",
            "title": "网络数据部"
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
	        <Text style={styles.headerTitle}>未完成列表</Text>
	        <View style={styles.headerleftBTN}><Icon name='ios-arrow-back' size={30} onPress={this.props.back}/></View>
      	</View>
			</View>
			)
	}

  render(){
    return(
    <View style={styles.container}>
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
        initialRoute={{ name: 'Undonelist', component: Undonelist }}
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
    backgroundColor: '#ee735c',
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
  ABox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc'
  },
  ALeft: {
    flex: 1,
    width: width / 3,
  },
  Text: {
    fontSize: 20,
    paddingTop: 5,
  }
})