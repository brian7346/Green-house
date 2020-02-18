/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';

import Navigation from './navigation';
import { Block } from './components/';

const App: () => React$Node = () => {
  return (
    <Block>
      <Navigation />
    </Block>
  );
};

const styles = StyleSheet.create({});

export default App;
