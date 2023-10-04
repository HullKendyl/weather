import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

function OurChild(props) {

    const {message} = props;

    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={{height: 200, width: 200, backgroundColor: 'red'}}>
            <Text>{message}</Text>
        </View>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
});

// function OurChild(props) {

//     const {message} = props;

    // return (
    //     <View style={{height: 200, width: 200, backgroundColor: 'red'}}>
    //         <Text>{message}</Text>
    //     </View>
    // )
// }

export default OurChild;