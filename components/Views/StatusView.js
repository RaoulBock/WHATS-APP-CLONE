import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const StatusView = () => {
  return (
    <View style={styles.outline}>
      <Text>Status View</Text>
    </View>
  );
};

export default StatusView;

const styles = StyleSheet.create({
  outline: {
    width: windowWidth,
    paddingHorizontal: 10
  }
});
