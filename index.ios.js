import React from 'react';
import { Text, AppRegistry } from 'react-native';

const App = () => (
  <Text>Some text here </Text>
);

//Render it to the device

AppRegistry.registerComponent('albums', () => App);