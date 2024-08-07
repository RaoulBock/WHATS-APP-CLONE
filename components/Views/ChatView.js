import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import ChatViewCard from "../Card/ChatViewCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ChatView = () => {
  const chats_view = [
    {
      id: 1,
      fk_user: "Jessica Platt",
      message_description:
        "Ad esse aute eu aliquip consequat. Laboris enim sint labore sunt sit dolor eiusmod dolor voluptate aliqua laboris culpa. Laborum magna et commodo excepteur amet et Lorem quis adipisicing aliquip. Nisi pariatur cillum deserunt officia culpa commodo occaecat. Nostrud fugiat et exercitation occaecat consectetur dolore duis ad. Commodo incididunt eu consequat aliquip.",
      timestamp: "12.06 am",
      fk_profile_picture:
        "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
    },
    {
      id: 2,
      fk_user: "Rebekah Platt",
      message_description:
        "Ad esse aute eu aliquip consequat. Laboris enim sint labore sunt sit dolor eiusmod dolor voluptate aliqua laboris culpa. Laborum magna et commodo excepteur amet et Lorem quis adipisicing aliquip. Nisi pariatur cillum deserunt officia culpa commodo occaecat. Nostrud fugiat et exercitation occaecat consectetur dolore duis ad. Commodo incididunt eu consequat aliquip.",
      timestamp: "12.06 am",
      fk_profile_picture:
        "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
    }
  ];

  return (
    <View style={styles.outline}>
      <ScrollView>
        {chats_view.map((e, i) => {
          return <ChatViewCard key={i} item={e} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ChatView;

const styles = StyleSheet.create({
  outline: {
    width: windowWidth
  }
});
