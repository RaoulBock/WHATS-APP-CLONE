import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const ChatViewCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <View style={styles.grid}>
        <Image source={{ uri: item.fk_profile_picture }} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.user}>{item.fk_user}</Text>
          <Text style={styles.desc}>
            {item.message_description.length > 40
              ? `${item.message_description.substring(0, 40)}...`
              : item.message_description}
          </Text>
        </View>
      </View>
      <View>
        <Text>{item.timestamp}</Text>
        <Text style={styles.dot}>•</Text>
      </View>
    </View>
  );
};

export default ChatViewCard;

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  outline: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center"
  },
  grid: {
    flexDirection: "row",
    alignItems: "center"
  },
  info: {
    paddingHorizontal: 10
  },
  user: {
    fontWeight: "600",
    color: "#404040",
    fontSize: 15
  },
  desc: {
    color: "gray",
    fontWeight: "400"
  },
  dot: {
    color: "#00a76b",
    fontSize: 30,
    textAlign: "center"
  }
});
