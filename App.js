import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";
import CityDetails from "./src/components/CityDetails";
import OurChild from "./src/components/OurChild";

const App = () => {
  return (
    <View>
      <OurChild message={'Hello'}/>
      <OurChild message={'Greetings'}/>
      <OurChild message={'Goodbye'}/>
    </View>
    //<CurrentWeather />
    // <UpcomingWeather />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;

