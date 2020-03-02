import React, { Component } from 'react';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
class Cart extends Component {
    render() {
        const {navigation} = this.props;
        return (
            // <Stack.Navigator initialRoute={{ name: 'CART_VIEW' }}>
            //     <Stack.Screen name="CART_VIEW" component={CartView} options={{headerShown: false}}/>
            //     <Stack.Screen name="PRODUCT_DETAIL" component={ProductDetail} options={{headerShown: false}}/>
            // </Stack.Navigator>
            <CartView navigation={navigation}/>
        );
    }
}
export default Cart;