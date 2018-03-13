import React, {Component} from 'react';
import Test from './Test';

export default class Header extends Component {
  render() {
    return (
      <div className="title2">
        <Test patate={this.props.title}/>
      </div>
    );
  }
}
