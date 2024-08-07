import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderColor: "#017aff",
    borderWidth: 1,
    padding: 6,
    borderRadius: 4,
    width: 100,
    marginTop: 4
  },
  text: {
    color: "#017aff",
    fontWeight: "600",
    textAlign: "center"
  }
});
