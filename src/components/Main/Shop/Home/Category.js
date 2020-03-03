import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';
const { width, height } = Dimensions.get('window');
import ViewPager from '@react-native-community/viewpager';
class Category extends Component {
    gotoListProduct() {
        const { navigation } = this.props;
        navigation.navigate({ name: 'LIST_PRODUCT' });
    }
    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={textStyle} >LIST OF CATEGORY</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 4}}>
                    <ViewPager width={imageWidth} height={imageHeight} style={styles.viewPager} initialPage={0}>
                        <TouchableOpacity onPress={this.gotoListProduct.bind(this)} key="1">
                            <ImageBackground source={littleIcon} style={imageStyle}>
                                <Text style={cateTitle}>Maxi Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gotoListProduct.bind(this)} key="2">
                            <ImageBackground source={maxiIcon} style={imageStyle}>
                                <Text style={cateTitle}>Maxi Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gotoListProduct.bind(this)} key="3">
                            <ImageBackground source={partyIcon} style={imageStyle}>
                                <Text style={cateTitle}>Maxi Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </ViewPager>
                </View>
            </View>
        );
    }
}
//933 x 465
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    viewPager: {
        flex: 1
      },
      pageStyle: {
        alignItems: 'center',
        padding: 20,
      },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});
export default Category;