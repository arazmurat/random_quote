import React, { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";

const toggleStyle = {
  cursor: "pointer",
};
const Toggle = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div
      style={toggleStyle}
      onClick={() => {
        setThemeMode(themeMode === "red" ? "black" : "red");
      }}
    >
      <span>
        <button>Toggle Color</button>
      </span>
    </div>
  );
};

export default Toggle;
