// @flow
import React, { Component } from "react";
import styles from "./App.css";

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

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
      <div>
        <div
          className="parent"
          onMouseDown={() => this.onMouseDown()}
          onMouseUp={() => this.onMouseUp()}
        >
          {[...Array(108).keys()].map(index => {
            let isOn = source.indexOf(index) > -1;
            return (
              <span
                className={isOn ? "childOn" : "child"}
                onMouseOver={() => this.onMouseOver(index)}
                onClick={() => this.onClickHandler(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
