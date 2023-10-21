import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';

function City () {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>
                <Text style={[styles.cityName, styles.cityText]}>London</Text>
                <Text style={[styles.countryName, styles.cityText]}>United Kingdom</Text>
                <View style={styles.populationWrapper}>
                    <IconText 
                        iconName={'user'} 
                        iconColor={'white'} 
                        bodyText={'8000'} 
                        bodyTextStyles={styles.populationText} 
                    />
                </View>
                <View style={styles.sunWrapper}>
                    <Feather name={'sunrise'} size={50} color={'white'}/> 
                    <Text style={styles.sunText}>10:46:58am</Text>
                    <Feather name={'sunset'} size={50} color={'white'}/> 
                    <Text style={styles.sunText}>17:28:15pm</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    sunWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    }
});

export default City;