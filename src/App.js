import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Output from './Output';
import marked from 'marked';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '# It\'s *markdown* all the way **up**'
    }
  }

  handleInputUpdate(currentValue) {
    this.setState({
      value: currentValue
    })
  }

  convert(text) {
    const raw = marked(text, { sanitze: true, gfm: true })
    return { __html: raw }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Markdown Previewer</h2>
        </div>

        <div className="App-container">
          <Input updateInput={this.handleInputUpdate.bind(this)} />
          <Output text={this.convert(this.state.value)} />
        </div>
      </div>
    );
  }
}

