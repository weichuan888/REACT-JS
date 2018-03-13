import React, { Component } from 'react';
import './App.css';
import Imagetest from './image';
import Texte from './Deuxiemecomponent';
import Flou from './Troisiemecomponent';
import Quatriemevue from './Quatriemecomponent';
import Cinquiemevue from './Cinquiemecomponent';
import Footer from './footer';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Imagetest/>
          <Texte/>
          <Flou/>
          <Quatriemevue/>
          <Cinquiemevue/>
          <Footer/>
      </div>
    );
  }
}

export default App;
