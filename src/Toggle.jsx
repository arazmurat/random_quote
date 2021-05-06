import React, { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import axios from "axios";

const toggleStyle = {
  cursor: "pointer",
};

const Toggle = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  axios.get("http://quotes.stormconsultancy.co.uk/random.json").then((json) => {
    console.log(json.data);
  });

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
