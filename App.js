import React from 'react';
import Login from './components/Login/Login';
import HelloWorld from './components/HelloWorld';
import Instructions from './components/Instructions';
import Attribute from './components/Attribute';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

export default StackNavigator({
  Login: { screen: Login },
  HelloWorld: { screen: HelloWorld},
  Instructions: { screen: Instructions },
  Attribute: { screen: Attribute }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
