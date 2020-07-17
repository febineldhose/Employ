import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Navig from './Navigation/Navig';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Navig />
      </SafeAreaView>
    );
  }
}
