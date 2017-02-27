/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Card } from './app/card';

export default class EstPoker extends Component {
  constructor(props){
    super(props);
    this.state = {selection: '?'};
    this.cardSelected = this.cardSelected.bind(this);
  }

  cardSelected(name){
    this.setState({selection: name});
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
          <Card name="0" pressHandler={this.cardSelected}/>
          <Card name="1" pressHandler={this.cardSelected}/>
          <Card name="2" pressHandler={this.cardSelected}/>
          <Card name="3" pressHandler={this.cardSelected}/>
          <Card name="5" pressHandler={this.cardSelected}/>
          <Card name="8" pressHandler={this.cardSelected}/>
        </View>
        <View style={styles.selection}>
          <Text style={styles.textselected}>{this.state.selection}</Text>
        </View>
      </View>
    );
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
    marginBottom: 80,
  },
  textselected: {
    fontSize: 300,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 20,
    textShadowOffset: {height:1}
  },
});

AppRegistry.registerComponent('EstPoker', () => EstPoker);