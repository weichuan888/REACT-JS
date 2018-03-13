import React, { Component } from 'react';
import Button from './button';

export default class Section extends Component {
  render() {
    return (
      <div className="section">
        <img src={this.props.url} alt={this.props.alt}/>
        <h5>  Magna feugiat lorem </h5>
        <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
        <Button parametre={this.props.parametre}/>
        
      </div>
    );
  }
}
