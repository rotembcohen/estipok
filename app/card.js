import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export class Card extends Component {
	constructor(props){
		super(props);
		this.pressHandler = this.pressHandler.bind(this);
	}

	pressHandler() {
		this.props.pressHandler(this.props.name);
	}
	render() {
		return (
			<TouchableHighlight onPress={this.pressHandler} style={styles.card}>
				<Text style={styles.cardtext}> {this.props.name} </Text>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		height: 77,
		width: 55,
		borderColor: '#87CEEB',
		borderWidth: 3,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 2,
		margin: 3,
		overflow: 'hidden',
	},
	cardtext: {
		color: '#87CEEB',
		fontSize: 50,
	}
})