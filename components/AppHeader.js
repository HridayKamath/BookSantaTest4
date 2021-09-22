import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import {Header} from 'react-native-elements';

 const AppHeader = props => {
  return(
    <Header
    centerComponent = {{
      text: props.title,
      style: styles.title,
    }}
    backgroundColor = {'#6fc0b8'}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#3a4412',
    fontSize: 25,
    fontWeight: 'bold',
  }
});

export default AppHeader;