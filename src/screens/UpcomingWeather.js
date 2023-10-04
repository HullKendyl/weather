import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, ImageBackground } from 'react-native';
import ListItem from "../components/ListItem";

function UpcomingWeather () {

    const renderItem = ({item}) => (
        <ListItem 
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt} 
            min={item.main.temp_min} 
            max={item.main.temp_max}
        />
    )

    const { wrapper, title, image } = styles;

    return (
        <SafeAreaView style={wrapper}>
            <ImageBackground 
                source={require('../../assets/upcoming-background.jpg')} 
                style={image}
            >
                <Text style={title}>Upcoming Weather</Text>
                <View>
                    <FlatList 
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.dt_txt}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const data = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }
];

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    title: {
        color: 'white',
        fontSize: 30,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20
    },
    image: {
        flex: 1
    }
}) 

export default UpcomingWeather;
