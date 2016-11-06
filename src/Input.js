import React, { Component } from 'react';
import placeholder from './Placeholder';

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: placeholder
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const newValue = event.target.value
    this.setState({value: newValue})
    this.props.updateInput(newValue)
  }

  render() {
    return (
      <textarea
        className="textbox InputArea"
        name="input"
        ref="input"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

