import React, { Component } from 'react';
import Test from './titre';
import Soustitre from './soustitre';
// import Imagetest from './image.js';

export default class Display extends Component {
  render() {
    return (
        <div className="imagetest">
            <div className="sousintro">
              <Test/>
              <Soustitre/>
          </div>
        </div>
    );
  }
}
