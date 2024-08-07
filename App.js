import React from "react";
import { StatusBar } from "expo-status-bar";
import { APP_PAGES } from "./context/settings";
import SplashScreen from "./components/Screens/SplashScreen";
import AppProvider, { AppContext } from "./context/AppContext";
import LoginScreen from "./components/Screens/LoginScreen";
import HomeScreen from "./components/Screens/HomeScreen";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  React.useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#00a76b"
        hidden={false}
        translucent={true}
      />
      {navPage === APP_PAGES.APP.SPLASH && (
        <SplashScreen setNavPage={onSetNavPage} />
      )}
      {navPage === APP_PAGES.APP.LOGIN && <LoginScreen />}
      {navPage === APP_PAGES.APP.HOME && <HomeScreen />}
    </>
  );
};

export default App;
