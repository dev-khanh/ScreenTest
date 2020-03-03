import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg';
const { width } = Dimensions.get('window');
class Collection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle, viewContentView } = styles;
        return (
            <View style={wrapper}>
                <View style={viewContentView}>
                    <Text style={textStyle} >SPRING COLLECTION</Text>
                </View>
                <TouchableOpacity style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Image source={bannerImage} style={imageStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}
//933 x 465
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight, 
        width: imageWidth
    },
    viewContentView:{
        height: 50, justifyContent: 'center'
    }
});
export default Collection;