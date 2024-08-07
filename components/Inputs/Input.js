import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({ placeholder, onChangeText, secureTextEntry, title, icon }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,

        zIndex: 1
      }}
    >
      <Text style={styles.title}>{title}</Text>

      <View style={styles.grid}>
        <Text>{icon}</Text>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: { paddingHorizontal: 10, width: "90%", padding: 10 },
  title: {
    color: "#404040",
    position: "absolute",
    backgroundColor: "white",
    zIndex: 100000,
    top: -8,
    left: 10,
    fontSize: 10,
    fontWeight: "600"
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10
  }
});
