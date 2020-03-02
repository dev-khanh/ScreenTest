import React, { Component } from 'react';
import HomeView from './HomeView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
class Home extends Component {
    render() {
        const {navigation} = this.props;
        return (
            // <Stack.Navigator initialRoute={{ name: 'HOME_VIEW' }}>
            //     <Stack.Screen name="HOME_VIEW" component={HomeView} options={{headerShown:false}} />
            //     <Stack.Screen name="LIST_PRODUCT" component={ListProduct} options={{headerShown:false}}  />
            //     <Stack.Screen name="PRODUCT_DETAIL" component={ProductDetail} options={{headerShown:false}}/>
            // </Stack.Navigator>
            <HomeView navigation={navigation}/>
        );
    }
}
export default Home;
