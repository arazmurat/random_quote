import React, { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import AppTheme from "./Colors";
import Toggle from "./Toggle";
import Quotes from "./Quotes"

const Main = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <main
      style={{
        padding: "15rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <Toggle />
      <Quotes/>
     
    </main>
  );
};

export default Main;
