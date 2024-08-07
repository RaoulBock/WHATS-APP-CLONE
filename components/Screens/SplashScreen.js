import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import LoginNav from "../Nav/LoginNav";
import { APP_ICONS } from "../../context/settings";
import { AppContext } from "../../context/AppContext";

const SplashScreen = () => {
  const { loggedInAccount } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <LoginNav />
      <View style={styles.body}>
        {loggedInAccount > 1 ? (
          <Text>List of logged in accounts goes here.</Text>
        ) : (
          <View style={styles.outer}>
            <Image
              source={{
                uri: "https://cdni.iconscout.com/illustration/premium/thumb/empty-inbox-4790940-3989293.png",
              }}
              style={styles.image}
            />
            <Text style={styles.text}>
              Click the {APP_ICONS.ADD} to create a new account.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  outer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 400,
  },
  text: {
    fontWeight: "600",
    alignItems: "center",
  },
});
