import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import LoginNav from "../Nav/LoginNav";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import moment from "moment";
import { AppContext } from "../../context/AppContext";
import { APP_ICONS, APP_PAGES } from "../../context/settings";

const LoginScreen = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [error, setError] = React.useState("");

  const { setNavPage, loggedInAccount } = React.useContext(AppContext);

  const loginUser = () => {
    if (username === "" || password === "") {
      setError("Please provide your username and password");
    } else {
      loggedInAccount.push({
        username: username,
        password: password,
        date: moment().format("MMM Do YY")
      });

      setNavPage(APP_PAGES.APP.HOME);
    }

    console.log(loggedInAccount);
  };

  return (
    <View style={styles.outline}>
      <LoginNav />
      <View style={styles.body}>
        <Text style={[styles.text, { fontSize: 18 }]}>Login</Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 10, color: "gray", fontWeight: "400", fontSize: 12 }
          ]}
        >
          Ad culpa adipisicing mollit Lorem velit nostrud ut duis voluptate.
          Aliquip ullamco sint est reprehenderit.
        </Text>

        <View style={styles.control}>
          <Input
            title={"Email"}
            placeholder={"Someone@something.com"}
            onChangeText={(e) => setUsername(e)}
            icon={APP_ICONS.MAIL}
          />
        </View>
        <View style={styles.control}>
          <Input
            title={"Password"}
            placeholder={"••••••••"}
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
            icon={APP_ICONS.LOCK}
          />
        </View>
        <Button text={"Login"} onPress={() => loginUser()} />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  body: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  text: {
    fontWeight: "600",
    fontSize: 14
  },
  control: {
    marginVertical: 10
  },
  error: {
    color: "red",
    fontWeight: "600",
    marginTop: 10
  }
});
