/* Ranjithkumar Matheswaran */

//Import
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header.js';

//Create
const App = () => (
  <Header />
);

//Render it to device
AppRegistry.registerComponent('albums', () => App);
