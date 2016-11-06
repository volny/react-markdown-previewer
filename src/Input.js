import React, { Component } from 'react';

export default class Input extends Component {
  handleChange(event) {
    this.props.updateInput(event.target.value)
  }

  render() {
    return (
      <textarea
        className="textbox InputArea"
        name="input"
        ref="input"
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

