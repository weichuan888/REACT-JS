import React, { Component } from 'react';
import Button from './button';



export default class Cinquiemevue extends Component {
  render() {
    return (
      <div className='CinqV'>
        <div className="article">
          <h3>Adipiscing amet consequat</h3>
            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
        </div>
          <div className="Sign">
            <Button parametre="Sign up"/>
            <Button parametre="Learn More"/>
          </div>
      </div>
    );
  }
}
