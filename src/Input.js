import React, { Component } from 'react';

export default class Input extends Component {
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

var RawInput = React.createClass({
    update:function(){
        var modifiedValue=this.refs.inputValue.getDOMNode().value;
        this.props.updateValue(modifiedValue);
    },
    render:function(){
        return (<textarea rows="22" type="text" ref="inputValue" value={this.props.value} onChange={this.update} className="form-control" />)
    }
});
