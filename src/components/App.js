import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Main from './Main/Main';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Authentication from './Authentication/Authentication';
import OrderHistory from './OrderHistory/OrderHistory';
import ProductDetail from './Main/Shop/ProductDetail/ProductDetail';
import ListProduct from './Main/Shop/ListProduct/ListProduct';
const Stack = createStackNavigator();
StatusBar.setHidden(true);
export default class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        initialRoute:'MAIN'
      }
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={this.state.initialRoute}>
          <Stack.Screen name="MAIN" component={Main} options={{headerShown: false}} />
          <Stack.Screen name="CHANGE_INFO" component={ChangeInfo} options={{headerShown: false}}/>
          <Stack.Screen name="AUTHENTICATION" component={Authentication} options={{headerShown: false}}/>
          <Stack.Screen name="ORDER_HISTORY" component={OrderHistory} options={{headerShown: false}}/>
          <Stack.Screen name="PRODUCT_DETAIL" component={ProductDetail} options={{headerShown: false}}/>
          <Stack.Screen name="LIST_PRODUCT" component={ListProduct} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}