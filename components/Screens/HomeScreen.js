import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView
} from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import BottomNav from "../Nav/BottomNav";
import { AppContext } from "../../context/AppContext";
import HomeView from "../Views/HomeView";

import TradeView from "../Views/TradeView";
import HistoryView from "../Views/StatusView";
import ChatView from "../Views/ChatView";
import StatusView from "../Views/StatusView";

const HomeScreen = () => {
  const { menuTab, currentTab, tab, setTab } = React.useContext(AppContext);
  const [canmomentum, setCanMomentum] = React.useState(false);

  const menuView = [
    {
      id: 1,
      name: <ChatView />
    },
    {
      id: 2,
      name: <StatusView />
    }
  ];

  console.log(tab);

  return (
    <View style={styles.outline}>
      <Nav title={currentTab || "WhatsApp"} />
      <View style={styles.body}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // onScroll={(event) => {
          //   setCanMomentum(true);
          // }}
          // onMomentumScrollEnd={() => {
          //   if (canmomentum) console.log("onMomentumScrollEnd");
          //   setCanMomentum(false);

          // }}
        >
          {menuView.map((e, i) => {
            return <View key={i}>{e.name}</View>;
          })}
          {/* <ChatView />
          <StatusView /> */}
        </ScrollView>
      </View>
      {/* <BottomNav /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  body: {
    flex: 1
  }
});
