import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MAIN" Component={}/>
          <Stack.Screen name="CHANGE_INFO" Component={}/>
          <Stack.Screen name="AUTHENTICATION" Component={}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}