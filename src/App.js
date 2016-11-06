import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownInput from './MarkdownInput';
import Output from './Output';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Markdown Previewer</h2>
        </div>

        <div className="App-container">
          <MarkdownInput />
          <Output />
        </div>

      </div>
    );
  }
}

