import React, { Component } from 'react';
import { ColorContext } from './ColorContext';
import WelcomeText from './WelcomeText';
import Button from "./Button";

class App extends Component {
  state = { 
    color: 'red', 
    quote: ""
  };

  handleChange = () => {
    const { color } = this.state;
    const newColor = color === 'red' ? 'black' : 'red';
    this.setState({ color: newColor });
    this.getQuote()
    //this.changeColor()
  }

  getQuote = () => {
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then(res => res.json())
    .then(jsonRes => this.setState({quote:jsonRes.quote}))
  }


/**first version you may call this function inside your onclick */
  changeColor = () => {
    document.body.style.backgroundColor = this.state.color;
  }
/**this is second version; when state updating, this method works */
  componentDidUpdate =()=>{
    let differ = this.state.color === "red" ? "black" : "red" ;
    document.body.style.backgroundColor = differ;
  }


  render = () => {
    const { Provider } = ColorContext;
    console.log(this.state.quote)
    return (
      <div style={{width:"300px", height:"300px", margin: "0px auto"}}>
      <Provider value={{state: this.state, handleChange:this.handleChange}} > 
      {/* </Provider><ColorContext.Provider value={{state: this.state, handleChange:this.handleChange}} >  also i can use like this */} 
        <WelcomeText />
        <Button/>
      </Provider>
      {/* </ColorContext.Provider> */}
      </div>
    );
  }



  
}

export default App;
