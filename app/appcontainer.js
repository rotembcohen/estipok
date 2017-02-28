import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Card } from './card';

export class AppContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
      selection: '?',
      dropZoneValues: null,
    };
	}

  setDropZoneValues(event) {
    this.setState({
      dropZoneValues: event.nativeEvent.layout
    });
  }

	render() {
		return (
			<View style={styles.scene}>
				<View style={styles.instructions}>
					<Text style={styles.title}>
						Welcome to Estimation Poker!
					</Text>
					<Text style={styles.regulartext}>
						To get started, pick a card
					</Text>
				</View>
				<View style={styles.carddeck}>
					<Card name="0" dropZoneValues={this.state.dropZoneValues}/>
					<Card name="1" dropZoneValues={this.state.dropZoneValues}/>
					<Card name="2" dropZoneValues={this.state.dropZoneValues}/>
					<Card name="3" dropZoneValues={this.state.dropZoneValues}/>
					<Card name="5" dropZoneValues={this.state.dropZoneValues}/>
					<Card name="8" dropZoneValues={this.state.dropZoneValues}/>
				</View>
				<View style={styles.selection} onLayout={this.setDropZoneValues.bind(this)} />				
			</View>
		)
	}
}


const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  regulartext: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  carddeck: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selection: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 80,
    borderStyle: 'dashed',
    borderWidth: 2,
    width: 300,
    borderColor: '#87CEEB',
  },
});