import React, { Component } from 'react';
import Hello from './Hello';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <Hello parametre={'HelloWorld'}/>
      </div>
    );
  }
}
