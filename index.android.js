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

import Calculator from "./Apps/calculator.js"

export default class PreWork extends Component {
  render() {
    return (
     <Calculator/>
    );
  }
}

AppRegistry.registerComponent('PreWork', () => PreWork);
