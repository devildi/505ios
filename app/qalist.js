import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native'

import QAdetail from './qadetail'

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
			<View style={styles.itemBox}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>{row.title}</Text>
				</View>
				<View style={styles.body}>
					<Text>{row.body}</Text>
				</View>
			</View>
			)
	}
}

export default class Qalist extends Component {
	constructor() {
	  super()
	  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
	  this.state = {
	  	dataSource: ds.cloneWithRows([])
	  }
	}

	_loadpage(){
		this.props.navigator.push({
      name: 'qadetail',
      component: QAdetail
    })
	}

	_renderRow(row){
    return <Item row={row}/>
	}

	_renderFooter(){

	}

	_fetchMoreData(){
		
	}

	render(){
		return( 
			<View style={styles.container}>
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
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  headerContainer: {
  	backgroundColor: '#f0f0f0',
  },
  header: {
  	textAlign: 'center',
  	paddingTop: 3,
  	paddingBottom: 3,
  	fontSize: 20,
  },
  itemBox: {
  	borderWidth: 1,
  	borderColor: '#a9a9a9',
  	borderRadius: 2,
  	marginBottom: 3,
  },
  body: {
  	padding: 10
  }
})