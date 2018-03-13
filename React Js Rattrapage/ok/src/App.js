import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Test from './Test';
import Header from './Header';




export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lol: "yeaaaaah"
    }
  }

  render() {

    let variable = "aiayayayaya";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Header title="yooooolo"/>
        <h5>{this.state.lol}</h5>

      </div>
    );
  }
}
