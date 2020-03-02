import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';
import {connect} from 'react-redux';

class Main extends Component {
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };
    render() {
        const { navigation } = this.props;
        return (
            <Drawer ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigation={navigation} />}
                openDrawerOffset={0.4}
                tapToClose >
                <Shop open={this.openControlPanel.bind(this)} navigation={navigation} />
            </Drawer>
        );
    }
    componentDidMount(){
        console.log("DEVK",this.props.solonNhat)
    }
}
const ConectDataState = (state) =>{
    return{
        solonNhat: state.solonNhat
    }
}
export default connect(ConectDataState) (Main)