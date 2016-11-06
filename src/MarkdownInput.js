import React, { Component } from 'react';

export default class MarkdownInput extends Component {

  handleInputChange() {
    const currentValue = this.refs.input.getDOMNode().value
    this.props.updateInput(currentValue)
  }

  render() {
    return (
      <textarea
        className="textbox InputArea"
        name="input"
        ref="input"
        value="Write your Markdown here"
        onChange={this.handleInputChange}
      />
    );
  }
}

