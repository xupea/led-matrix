// @flow
import React, { Component } from "react";
import styles from "./App.css";
import LEDMatrix from "./LEDMatrix";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.isPressed = false;

    this.state = {
      source: []
    };
  }

  onClickHandler(index) {
    let source = this.state.source;
    source.push(index);
    this.setState({
      source
    });
  }

  onMouseOver(index) {
    if (this.isPressed) {
      let source = this.state.source;
      source.push(index);
      this.setState({
        source
      });
    }
  }

  onMouseDown() {
    this.isPressed = true;
  }

  onMouseUp() {
    this.isPressed = false;
  }

  render() {
    let source = this.state.source;
    return (
      <div className="container" data-tid="container">
        <div className="columns">
          <LEDMatrix />
          <LEDMatrix />
        </div>
      </div>
    );
  }
}
