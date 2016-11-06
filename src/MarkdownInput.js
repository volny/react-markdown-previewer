import React, { Component } from 'react';

export default class MarkdownInput extends Component {
// getInitialState() {
//    return {
//      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
//    }
//  }


  update() {
    const currentValue = this.refs.inputValue.getDOMNode().value
    this.props.updateValue(currentValue)
  }

  render() {
    return (
      <textarea
        className="textbox InputArea"
        name="input"
        value="Write your Markdown here"
        onChange={this.update}
      />
    );
  }
}

