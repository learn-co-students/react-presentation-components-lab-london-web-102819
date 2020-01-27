// Code SimpleComponent Here
import React, { Component } from "react";

class SimpleComponent extends Component {
  state = {
    mood: "happy"
  };
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }

  handleClick = () => {
    this.setState({
      mood: this.state.mood === "happy" ? "sad" : "happy"
    });
  };
}

export default SimpleComponent;
