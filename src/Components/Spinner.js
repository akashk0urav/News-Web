import React, { Component } from "react";
import loader from "./loader3.gif";
export class spinner extends Component {
  render() {
    return (
      <div className="container text-center">
        <img src={loader} alt="LOADING" />
      </div>
    );
  }
}

export default spinner;
