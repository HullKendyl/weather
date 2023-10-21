import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import CityDetails from "./src/components/CityDetails";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <UpcomingWeather /> */}
      <City />
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

