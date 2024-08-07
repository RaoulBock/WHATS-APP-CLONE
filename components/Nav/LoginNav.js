import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS, APP_PAGES } from "../../context/settings";
import { AppContext } from "../../context/AppContext";

const LoginNav = () => {
  const { setNavPage, navPage } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      {navPage === APP_PAGES.APP.LOGIN && (
        <TouchableOpacity onPress={() => setNavPage(APP_PAGES.APP.SPLASH)}>
          <Text>{APP_ICONS.BACK}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.text}>Giant</Text>
      <TouchableOpacity onPress={() => setNavPage(APP_PAGES.APP.LOGIN)}>
        <Text style={{}}>{APP_ICONS.ADD}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1
  },
  btn: {
    backgroundColor: "#017aff",
    padding: 10,
    borderRadius: 50
  },
  text: {
    fontWeight: "600",
    color: "#404040",
    fontSize: 18
  }
});
