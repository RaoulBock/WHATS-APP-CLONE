export const APP_PAGES = {
  APP: {
    SPLASH: "SPLASH",
    LOGIN: "LOGIN",
    HOME: "HOME"
  }
};

import { Ionicons } from "react-native-vector-icons";

export const APP_ICONS = {
  ADD: (
    <Ionicons name="ios-add-outline" style={{ color: "#fff", fontSize: 28 }} />
  ),
  BACK: (
    <Ionicons
      name="ios-arrow-back-circle-outline"
      style={{ color: "#017aff", fontSize: 28 }}
    />
  ),
  MAIL: (
    <Ionicons
      name={"ios-mail-open-outline"}
      style={{ color: "#017aff", fontSize: 20 }}
    />
  ),
  LOCK: (
    <Ionicons
      name={"ios-lock-closed-outline"}
      style={{ color: "#017aff", fontSize: 20 }}
    />
  ),
  SETTINGS: (
    <Ionicons
      name="ios-settings-outline"
      style={{ color: "#fff", fontSize: 21 }}
    />
  ),
  HOME: (
    <Ionicons
      name="ios-home-outline"
      style={{ color: "#017aff", fontSize: 20 }}
    />
  ),
  CHART: (
    <Ionicons
      name={"ios-stats-chart-outline"}
      style={{ color: "#017aff", fontSize: 20 }}
    />
  ),
  TRADE: (
    <Ionicons
      name="ios-swap-vertical-outline"
      style={{ color: "#017aff", fontSize: 20 }}
    />
  ),
  SEARCH: (
    <Ionicons
      name="ios-search-outline"
      style={{ color: "#fff", fontSize: 21 }}
    />
  ),
  TRAY: (
    <Ionicons
      name="ios-file-tray-outline"
      style={{ color: "#017aff", fontSize: 20 }}
    />
  ),
  CARET: (
    <Ionicons
      name="ios-caret-forward"
      style={{ color: "#017aff", fontSize: 20 }}
    />
  ),
  TEAM: (
    <Ionicons
      name="ios-people-outline"
      style={{ color: "#017aff", fontSize: 20 }}
    />
  ),
  COLLAPSE: (
    <Ionicons
      name="ios-ellipsis-vertical-outline"
      style={{ color: "#017aff", fontSize: 20 }}
    />
  ),
  CAMERA: (
    <Ionicons
      name="ios-camera-outline"
      style={{ color: "#fff", fontSize: 20 }}
    />
  )
};

export const pairs = [
  "EUR/USD",
  "USD/JPY",
  "GBP/USD",
  "USD/CHF",
  "AUD/USD",
  "USD/CAD",
  "NZD/USD"
];
