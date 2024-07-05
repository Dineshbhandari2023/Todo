import React, { Component } from "react";
import "../assets/App.css";
import { ReactComponent as InfoIcon } from "../assets/info-circle.svg";

export default class AppBar extends Component {
  render() {
    return (
      <div className="app-bar flex jcsb">
        <p>Todo List</p>
        <div className="icon-btn">
          <InfoIcon style={{ width: 30, fill: "#fff" }} />
        </div>
      </div>
    );
  }
}
