import React, { Component } from 'react';
import Section from './section';

export default class Quatriemevue extends Component {
  render() {
    return (
      <div className="Quatri">
        <div className="nom">
          <h3> Adipiscing amet consequat</h3>
          <h4>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</h4>
        </div>
        <div className="Secti">
          <Section url='https://html5up.net/uploads/demos/photon/images/pic04.jpg' alt='test' parametre='truc'/>
          <Section url='https://html5up.net/uploads/demos/photon/images/pic03.jpg' alt='test1' parametre='lol'/>
          <Section url='https://html5up.net/uploads/demos/photon/images/pic02.jpg' alt='test2' parametre='gulp'/>
        </div>
      </div>

    );
  }
}
