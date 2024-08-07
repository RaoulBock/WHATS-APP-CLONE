import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS, APP_PAGES } from "../../context/settings";
import { AppContext } from "../../context/AppContext";

const BottomNav = () => {
  return (
    <View style={styles.outline}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>{APP_ICONS.ADD}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  outline: {
    alignItems: "flex-end",
    margin: 20
  }
});
