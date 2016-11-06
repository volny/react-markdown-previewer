import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownInput from './MarkdownInput';
import Output from './Output';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '*markdown* all the way **up**'
    }
  }

  handleInputUpdate(currentValue) {
    this.setState({
      value: currentValue
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Markdown Previewer</h2>
        </div>

        <div className="App-container">
          <MarkdownInput updateInput={this.handleInputUpdate} />
          <Output value={this.state.value} />
        </div>
      </div>
    );
  }
}

