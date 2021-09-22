import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonate from '../screens/BookDonate';
import BookRequest from '../screens/BookRequest';


export const RNDNavigator = createBottomTabNavigator({
  DonateBook: {
    screen: BookDonate,
    navigationOptions: {
      tabBarLabel: 'Donate Books',
    }
  },
  RequestBook: {
    screen: BookRequest,
    navigationOptions: {
      tabBarLabel: 'Request Books',
    }
  },
})