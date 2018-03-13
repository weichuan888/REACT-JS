import React, {Component} from 'react';

export default class Logo extends Component {
  render() {
    return(
      <div className="logo">
        <i class="fa fa-cloud fa-5x" aria-hidden="true">{this.props.params}</i>
      </div>
    );
  }
}
