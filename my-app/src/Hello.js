import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        {this.props.parametre}
      </div>
    );
  }
}
