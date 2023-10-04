import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

function CurrentWeather() {

  const { wrapper, container, temp, feels, highLowWrapper, bodyWrapper, description, message } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
      <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <View style={highLowWrapper}>
          <Text style={highLow}>High: 8</Text>
          <Text style={highLow}>Low: 6</Text>
        </View>
      </View>

      <View style={bodyWrapper}>
        <Text style={description}>Its sunny</Text>
        <Text style={message}>Its perfect T-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  }, 
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});

export default CurrentWeather;