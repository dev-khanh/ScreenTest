import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';
import {connect} from 'react-redux';
class Main extends Component {
    // componentWillReceiveProps() {
    //     this.closeControlPanel()
    // }
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };
    render() {
        console.disableYellowBox=true;
        const { navigation } = this.props;
        return (
            <Drawer ref={(ref) => { this.drawer = ref; }}
                content={<Menu closeControlPanel={this.closeControlPanel} navigation={navigation} />}
                openDrawerOffset={0.4}
                tapToClose >
                <Shop open={this.openControlPanel.bind(this)} navigation={navigation} />
            </Drawer>
        );
    }
}
const ConectDataState = (state) =>{
    return{
        goBack: state.goBack
    }
}
export default connect(ConectDataState) (Main)