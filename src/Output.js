import React, { Component } from 'react';

export default class MarkdownInput extends Component {
  render() {
    return (
      <div
        className="textbox OutputArea"
        dangerouslySetInnerHTML={this.props.text}
      />
    );
  }
}

