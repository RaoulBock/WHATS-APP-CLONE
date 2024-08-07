import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";

const List = ({ item }) => {
  return (
    <TouchableOpacity style={styles.outline}>
      <TouchableOpacity>
        <Text>{item}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>{APP_ICONS.COLLAPSE}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  outline: {
    padding: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  btn: {
    padding: 10,
    borderRadius: 50
  }
});
