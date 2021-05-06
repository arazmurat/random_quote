import React, { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import AppTheme from "./Colors";
import Toggle from "./Toggle";

const Main = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <main
      style={{
        padding: "10rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <Toggle />
    </main>
  );
};

export default Main;
