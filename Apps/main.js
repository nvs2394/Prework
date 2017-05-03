import React, { Component } from 'react';

import { StackNavigator, } from 'react-navigation';
import Calculator from './calculator.js';
import Setting from './setting.js';

const PreWork = StackNavigator({
  Main: {screen: Calculator},
  Setting: {screen: Setting}
});

module.exports = PreWork