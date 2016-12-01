import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Output from './Output';
import marked from 'marked';
import placeholder from './Placeholder';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value: placeholder
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(currentValue) {
    this.setState({
      value: currentValue
    })
  }

  parse(text) {
    const raw = marked(text, { sanitze: true, gfm: true })
    return { __html: raw }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Markdown Editor</h2>
        </div>

        <div className="App-container">
          <Input updateInput={this.handleChange} />
          <Output text={this.parse(this.state.value)} />
        </div>
      </div>
    );
  }
}

