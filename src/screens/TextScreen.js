import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
     const [name, setName ] = useState("") 
     
  return (
    <View>
         <Text>Enter password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => setName(newName) }
      />
      { name.length < 5 || name === "doggie"? <Text>"Enter new name"</Text> : <Text>My name is {name} </Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
