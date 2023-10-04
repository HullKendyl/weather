import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";
import CityDetails from "./src/components/CityDetails";

const App = () => {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
    //<CurrentWeather />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;

