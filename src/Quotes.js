import React, { Component } from "react";
import axios from "axios";

export default class Quotes extends Component {
  state = { data: [] };

  componentDidMount() {
    axios
      .get("http://quotes.stormconsultancy.co.uk/random.json")
      .then((json) => {
        this.setState({ data: json.data });
      });
  }

  render() {
    const data = this.state.data;
    return (
      <div>
       <p>{data.quote}</p>
      </div>
    );
  }
}
