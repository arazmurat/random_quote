import React, {useContext, useEffect} from 'react';
import { ColorContext } from './ColorContext';

// const WelcomeText = (props) => {
//   const { Consumer } = ColorContext;

//   return (
//     <Consumer>
//       {color => <p style={{ color }}>Hello world!!</p>}
//     </Consumer>
//   );
// };



const WelcomeText = (props) => {
  const {state} = useContext(ColorContext)   // take state context from ColorContext

  /**this is third version; with every state update this component rendering and useEffect works */
// let differ = state.color === "red" ? "black" : "red" ;
// useEffect(() => document.body.style.backgroundColor = differ);

  return (
    <div style={{ color: state.color, width:"300px", height:"180px", margin: "0px auto"}}>
      <p >Get a random quote from "http://quotes.stormconsultancy.co.uk/random.json"</p>
      <p >{state.quote}</p>
  </div>
  );
};

export default WelcomeText;
