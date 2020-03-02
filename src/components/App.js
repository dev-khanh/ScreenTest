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

import {createStore} from 'redux';
import {Provider} from 'react-redux';

var ArrayList = {
  solonNhat: 0
}
const renderData  = (state = ArrayList, action) =>{
    switch(action.type){
      case "UPDATE":
        return{
          ...state,
          solonNhat: action.solonNhat
        }
        break;
      default:
        break
    }
    return state
}
const Stack = createStackNavigator();
StatusBar.setHidden(true);
function MainApp(name) {
  console.log('devk',name)
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={name.initRouteName}>
        <Stack.Screen name="MAIN" component={Main} options={{headerShown: false}} />
        <Stack.Screen name="CHANGE_INFO" component={ChangeInfo} options={{headerShown: false}}/>
        <Stack.Screen name="AUTHENTICATION" component={Authentication} options={{headerShown: false}}/>
        <Stack.Screen name="ORDER_HISTORY" component={OrderHistory} options={{headerShown: false}}/>
        <Stack.Screen name="PRODUCT_DETAIL" component={ProductDetail} options={{headerShown: false}}/>
        <Stack.Screen name="LIST_PRODUCT" component={ListProduct} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        initialRoute:'MAIN'
      }
  }
  render() {
    const store = createStore(renderData)
    return (
      <Provider store={store}>
        <MainApp  initRouteName={this.state.initialRoute}/>
      </Provider>
    );
  }
}