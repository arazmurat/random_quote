import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Main from "./MainWithFunction";

function App() {
  const themeHook = useState("red");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
