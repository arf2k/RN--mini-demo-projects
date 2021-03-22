import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <Text style={styles.text}>Xander's Phone</Text>
        <Button
          title="Go to Components Demo"
          onPress={() => navigation.navigate("Components")}
        />
      </View>
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to CounterScreen"
        onPress={() => navigation.navigate("Count")}
      />
      <Button
        title="Go to ColorScreen"
        onPress={() => navigation.navigate("Colors")}
      />

      <Button
        title="Go to SquareScreen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to TextScreen"
        onPress={() => navigation.navigate("Text")}
      />
       <Button
        title="Go to BoxScreen"
        onPress={() => navigation.navigate("Box")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
