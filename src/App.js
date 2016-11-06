import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import marked from 'marked';

class App extends Component {
  convert() {
    const raw = marked('This *is* __Markdown__.', { sanitze: true, gfm: true })
    return { __html: raw }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Markdown Previewer</h2>
        </div>
        <p className="App-intro">
          <div dangerouslySetInnerHTML={this.convert()} />
        </p>
      </div>
    );
  }
}

export default App;
