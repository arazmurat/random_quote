import React, { useState, useEffect } from "react";

export const ColorContext = React.createContext("red");

function ContextProvider({ children }) {
  const [state, setstate] = useState({ color: "red", quote: "" });

  const handleChange = () => {
    console.log("handleChange çalıştı");
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
      .then((res) => res.json())
      .then((jsonRes) => {
        let newColor = state.color === "red" ? "black" : "red";
        setstate({ color: newColor, quote: jsonRes.quote });
      });
    document.body.style.backgroundColor = state.color;
  };

  //console.log(state)
  return (
    <ColorContext.Provider value={{ state, handleChange }}>
      {children}
    </ColorContext.Provider>
  );
}

export default ContextProvider;
