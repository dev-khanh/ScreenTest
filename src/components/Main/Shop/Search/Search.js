import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';
const Stack = createStackNavigator();
class Search extends Component {
    render() {
        const {navigation} = this.props;
        return (
            // <Stack.Navigator initialRoute={{ name: 'SEARCH_VIEW' }}>
            //     <Stack.Screen name="SEARCH_VIEW" component={SearchView} options={{headerShown:false}}/>
            //     <Stack.Screen name="PRODUCT_DETAIL" component={ProductDetail} options={{headerShown:false}}/>
            // </Stack.Navigator>
            <SearchView navigation={navigation}/>
        );
    }
}
export default Search;
