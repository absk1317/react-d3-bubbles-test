import React, { Component } from 'react';
import './App.css';
import ReactBubbleChart from 'react-d3-bubbles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Welcome to React D3 Bubble Charts Development Env
          </h1>
        </header>
        <div style={{ margin: '100px' }} />
        <ReactBubbleChart />
      </div>
    );
  }
}

export default App;
