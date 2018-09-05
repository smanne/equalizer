import React, { Component } from 'react';
import './App.css';
import Equalizer from '../../components/equalizer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Equalizer</h1>
        </header>
        <Equalizer />
      </div>
    );
  }
}

export default App;
