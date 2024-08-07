import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { pairs } from "../../context/settings";
import List from "../List/List";

const HomeView = () => {
  return (
    <View style={styles.outline}>
      {pairs.map((e, i) => {
        return <List item={e} key={i} />;
      })}
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({});
