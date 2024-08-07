import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {}
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [loggedInAccount, setLoggedInAccount] = React.useState([]);
  const [menuTab, setMenuTab] = React.useState(0);
  const [currentTab, setCurrentTab] = React.useState("");
  const [tab, setTab] = React.useState(1);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        loggedInAccount,
        setLoggedInAccount,
        menuTab,
        setMenuTab,
        currentTab,
        setCurrentTab,
        tab,
        setTab
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
