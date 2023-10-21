import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import IconText from '../components/IconText';

function City () {

    const { 
        container,
        cityName,
        cityText,
        countryName,
        populationWrapper,
        populationText,
        sunWrapper,
        sunText,
        rowLayout
    } = styles;

    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>United Kingdom</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText 
                        iconName={'user'} 
                        iconColor={'white'} 
                        bodyText={'8000'} 
                        bodyTextStyles={populationText} 
                    />
                </View>
                <View style={[sunWrapper, rowLayout]}>
                    <IconText 
                        iconName={'sunrise'} 
                        iconColor={'white'} 
                        bodyText={'10:46:58 am'} 
                        bodyTextStyles={sunText} 
                    />
                    <IconText 
                        iconName={'sunset'} 
                        iconColor={'white'} 
                        bodyText={'17:28:15 pm'} 
                        bodyTextStyles={sunText} 
                    />
                </View>
            </ImageBackground>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white' 
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    sunText: {
        fontSize: 20,
        color: 'white',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    sunWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default City;