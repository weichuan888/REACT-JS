import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {etablishments} from './fixtures';
import Etablishments from './Etablishments';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo : "inconnu",
      isLiked : false,
      isDisliked : false
    }
  }
  like = () => {
    this.setState( {
      isLiked : !this.state.isLiked,
      isDisliked: this.state.isDisliked ? !this.state.isDisliked : this.state.isDisliked,
    })
  }

  dislike = () => {
    this.setState( {
      isDisliked: !this.state.isDisliked,
      isLiked : this.state.isLiked ? !this.state.isLiked : this.state.isLiked,
    })
  }
  randomPseudo = () => {
    let randomPseudo = ""
    const possible= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const size= Math.floor(Math.random()*10)+5
    for (let i=0; i < size; i++)
      randomPseudo +=possible.charAt(Math.floor(Math.random()* possible.length))

    this.setState({
      pseudo : randomPseudo
    })
  }
  render() {
    let upIcon = <i className="fa fa-thumbs-up" aria-hidden="true"></i>
    let downIcon=  <i className="fa fa-thumbs-down" aria-hidden="true"></i>
    if(!this.state.isLiked)
            upIcon = <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>


    if(!this.state.isDisliked)
            downIcon = <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>

    const listEtablishment = etablishments.map( (etablishments) => {
      return (
        <Etablishments
          key= {etablishments.id}
          etablishments= {etablishments}
        />
        // autre maniere a ecrire
        // <li
        //   key = {etablishments.id}
        //   className = 'etablishments'
        // >
        // <h3> {etablishments.name}</h3>
        // {etablishments.description}
        // </li>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />


          <h1 className="Large">Welcome "{this.state.pseudo}"to {this.props.title}</h1>


        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="App-intro">

          <p> <a onClick={this.randomPseudo}> Changer le pseudo! </a> </p>

          <section>
            {listEtablishment}
          </section>

          <li class="etablishments">
            <h3>Billy</h3>
            Un Bar pas comme les autres
          </li>
          <li class="etablishments">
            <h3>No Alcohol</h3>
            Un bar pour enfant
          </li>
        </div>
        <div className='etablishments' >
     <div className='etablishments-description' >
         <h3>{ this.props.etablishments.name }</h3>

         { this.props.etablishments.description }
     </div>
     <div className='etablishmentsLikeDislike' >
         {/* Au clic sur le bouton on appelle la fonction */}
         <button onClick={this.like}>{ upIcon } </button>
         <button onClick={this.dislike}>{ downIcon }</button>
     </div>

 </div>
      </div>
    );
  }
}

export default App;


// Comprendre React introduction avec props et lister la liste des bars
