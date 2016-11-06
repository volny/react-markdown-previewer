import React, { Component } from 'react';
import marked from 'marked';

export default class MarkdownInput extends Component {
  convert() {
    const raw = marked('This *is* __Markdown__.', { sanitze: true, gfm: true })
    return { __html: raw }
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.convert()} />
    );
  }
}

