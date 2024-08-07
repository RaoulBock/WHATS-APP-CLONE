import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../context/settings";
import { AppContext } from "../../context/AppContext";

const Nav = ({ title }) => {
  const menu = [
    {
      id: 0,
      name: APP_ICONS.CAMERA
    },
    {
      id: 1,
      name: "Chats"
    },
    {
      id: 2,
      name: "Status"
    },
    {
      id: 3,
      name: "Calls"
    },
    {
      id: 4,
      name: "Discover"
    }
  ];

  const { setTab, tab } = React.useContext(AppContext);

  return (
    <View style={styles.index}>
      <View style={styles.outline}>
        <Text style={[styles.title, {}]}>{title}</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.btn}>
            <Text>{APP_ICONS.ADD}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { marginHorizontal: 30 }]}>
            <Text>{APP_ICONS.SEARCH}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text>{APP_ICONS.SETTINGS}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.grid}>
        {menu.map((e, i) => {
          return (
            <TouchableOpacity
              onPress={() => setTab(i)}
              key={i}
              style={styles.links}
            >
              <Text style={styles.linksText}>{e.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  index: {
    backgroundColor: "#00a76b",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#00a76b"
  },
  title: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 21
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  links: {},
  linksText: {
    color: "#eee",
    fontWeight: "400",
    fontSize: 14,
    textTransform: "uppercase"
  },
  outlineGrid: {
    flexDirection: "row",
    alignItems: "center"
  }
});
