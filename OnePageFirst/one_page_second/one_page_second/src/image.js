import React from 'react';
import Logo from './logo';

export default class Imagetest extends React.Component {
  render() {
    return (
      <div className="Imagetest">
        <div className="TitreImage">
          <Logo params={this.props.params}/>
          <h1> Hi, I am <strong>Photon</strong>, another fine <br/>
          little freebie from <a href="https://html5up.net/photon">HMTL5 UP</a></h1>
          <p> Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br/>
lobortis feugiat sapien sed etiam volutpat accumsan.</p>
          <button> DISCOVER </button>
        </div>
      </div>
    );
  }
}
