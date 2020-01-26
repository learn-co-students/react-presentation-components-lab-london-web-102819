import React, { Component } from "react";

class SimpleComponent extends Component {
  state = {
    mood: "happy"
  };

  handleClick = () => {
    const updatedMood = this.state.mood === "happy" ? "sad" : "happy";
    return this.setState({
      mood: updatedMood
    });
  };

  render() {
    const { mood } = this.state;
    return <div onClick={this.handleClick}>{mood}</div>;
  }
}

export default SimpleComponent;
