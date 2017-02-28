import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
  PanResponder,
} from 'react-native';

export class Card extends Component {
	constructor(props){
		super(props);
		this.pressHandler = this.pressHandler.bind(this);
		this.state = {
			pan: new Animated.ValueXY(),
		}
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([null,{
				dx: this.state.pan.x,
				dy: this.state.pan.y,
			}]),
			onPanResponderRelease: (e, gesture) => {
				if(this.isInDropZone(gesture)){
					//currently don't do anything
				} else {
					Animated.spring(
						this.state.pan,
						{toValue:{x:0,y:0}}
					).start();
				}
			},
		});
	}
	
	isInDropZone(gesture){
		var dz = this.props.dropZoneValues;
		return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
	}

	pressHandler() {
		this.props.pressHandler(this.props.name);
	}
	render() {
		return (
			<View>
				<Animated.View
					{...this.panResponder.panHandlers}
					style = {[this.state.pan.getLayout(),styles.card]}>
					<Text style={styles.cardtext}> {this.props.name} </Text>
				</Animated.View>
			</View>
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
		borderRadius: 5,
		margin: 3,
		overflow: 'hidden',
	},
	cardtext: {
		color: '#87CEEB',
		fontSize: 50,
	}
})