import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Names, { multiply, year,streamV1} from './js/test.js'


console.log(Names);
console.log(multiply);
console.log(year);
console.log(streamV1(100, 200));


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
