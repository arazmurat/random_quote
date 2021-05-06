import React from "react";
import ContextProvider from "./ColorContext";
import WelcomeText from "./WelcomeText";
import Button from "./Button";

function App() {
  return (
    <div style={{ width: "300px", height: "300px", margin: "0px auto" }}>
      <ContextProvider>
        <WelcomeText />
        <Button />
      </ContextProvider>
    </div>
  );
}

export default App;
