import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.mainViewStyle}>
         <View style={styles.boxOne}></View>
         <View style={styles.boxTwo}></View>
         <View style={styles.boxThree}></View>

    </View>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    borderWidth: 3,
    borderColor: "black",
   flexDirection: "row",
   justifyContent: "space-between",
   height: 100

  },
  boxOne: {
       backgroundColor: "red",
       height: 100,
       width: 100

  },
  boxTwo: {
     marginTop: 50,
     backgroundColor: "green",
     height: 100,
     width: 100,
   

  },
  boxThree: {
     backgroundColor: "purple",
     height: 100,
     width: 100,
     alignSelf: "flex-end"


  }
});

export default BoxScreen;
