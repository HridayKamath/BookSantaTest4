import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import {RNDNavigator} from './components/RNDNavigator';
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
    
  );
}
}


var AppNavigator = createSwitchNavigator({
  LoginScreen : {screen: LoginScreen},
 //WelcomeScreen: {screen:WelcomeScreen},
  BottomTab: {screen: RNDNavigator},
})

const AppContainer = createAppContainer(AppNavigator)
