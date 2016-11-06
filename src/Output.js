import React, { Component } from 'react';
import marked from 'marked';

export default class MarkdownInput extends Component {
  convert() {
    const raw = marked(this.props.value, { sanitze: true, gfm: true })
    return { __html: raw }
  }

  render() {
    console.log(this.props)
    return (
      <div
        className="textbox OutputArea"
        dangerouslySetInnerHTML={this.convert()}
      />
    );
  }
}

