// Code DelayedButton Component Here
import React, { Component } from "react";

export default class DelayedButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={e =>
          setTimeout(() => {
            e.persist();
            this.props.onDelayedClick(e, this.props.delay);
          })
        }
      >
        {" Delay Button"}
      </button>
    );
  }
}
