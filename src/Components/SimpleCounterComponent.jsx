import React, { Component, setState } from "react";

export class SimpleCounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: true,
    };
  }

  handleCount = () => {
    this.state.toggle
      ? this.setState({ count: this.state.count + 1 })
      : this.setState({ count: this.state.count });
  };

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    console.log("This is Simple Component");
    return (
      <div>
        <h1>SimpleCounterComponent</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleToggle}>Set toggle</button>
        <button onClick={this.handleCount}>Counter</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;
