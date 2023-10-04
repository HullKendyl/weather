import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons'


const Item = (props) => {
    
    const { dt_txt, min, max, condition } = props;
    
    return (
        <View style={styles.item}>
            <Feather name="sun" size={30} color="yellow" />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

function UpcomingWeather () {

    const renderItem = ({item}) => (
        <Item 
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt} 
            min={item.main.temp_min} 
            max={item.main.temp_max}
        />
    )

    return (
        <SafeAreaView style={styles.wrapper}>
            <ImageBackground 
                source={require('../../assets/upcoming-background.jpg')} 
                style={styles.image}
            >
                <Text style={styles.title}>Upcoming Weather</Text>
                <View>
                    <FlatList 
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.dt_txt}
                        ItemSeparatorComponent={() => 
                            <View style={{backgroundColor: 'red', }}>

                            </View>
                        }
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
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    temp: {
        color: 'white',
        fontSize: 20
    }
}) 

export default UpcomingWeather;
