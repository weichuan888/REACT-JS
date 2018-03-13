//Ici on a importé React, pour utiliser React, car il comprend dans un package de node modules.
// on a importé Render pour modifier notre dom
// on a importé bootstrap afin d'utiliser les outils de bootstrap
// on a importé l'index css pour utiliser les outils du css, pour le css, on doit mettre
// une extension afin que React reconnaisse le fichier. Alors que ReactDom n'a pas besoin.
//
// on a importé le sampleText, qui est un fichier sampletext.js
// Qui comprend du texte en markdown. On reprend juste le nom sampleText car
// dans le fichier sampleText.js, on retrouve export const sampleText, on reprend le nom de la variable.
//
// On a importé marked afin de traduire le fichier en markdown. C'est une bibliotheque.
// Ici il est déja installé, si on ne l'avait pas, il aurait fallu l'installer
// dans le terminal, avec = npm install --save marked

// PS: a Noter que render et sampleText sont mit entre {} pour chercher l'objet dynamique.


// Ici on code notre App
import React from 'react';
import { render } from 'react-dom';
//css
import './style/css/bootstrap.min.css';
import './index.css';
// Js perso
import { sampleText } from './sampleText';
//marked.js
import marked from 'marked';

// Après avoir importé, nous devons les utiliser, sinon notre terminal va pointé une erreur.
//
// On crée une Class suivi de son nom, extends => qu'on va étendre vers React.Component.
// C'est à dire qu'on va utilisé cette classe dans un composant de React.

class App extends React.Component {

// State, c'est au début de la classe, qu'on écrit notre state.
// Dans State, on va incorporer un ojet entre {}
// Et on ecrit text: sampleText => text est un nom, on peut le définir par n'importe quel nom
// sampleText c'est le nom de votre export const du fichier sampleText.js
// entre {}, on peut rajouter autant de propriété qu'on veut comme par exemple :
// id : 45632,


  state = {
    text: sampleText
  };

//Dans cette partie (derniere video markdown) Comment sauvegarder les modifications avec localStorage.
//Doc react.Component
// componentWillUpdate : invoque juste avant que le rendu soit fait, qd on change un prop ou state.
// componentWillUpdate(nextProps,nextState) => pour préciser ce qu'on va faire avec et qui va arriver.
// localStorage.setItem => on va crée un item dans le localStorage(rien a voir avec react le localStorage fct html5)
// ('text', nextState.text); => ca prend 2 options: le premier c'est le nom de la propriété 'text',
//et la deuxieme c'est la valeur nextState.text etre utilisé avant la modification, avant la MAJ.
// aucun changement sur la page, on va inspecter la page et aller dans application puis dans localStorage
// si on efface le texte dans la page, notre inspect f12, on remarque qu'il se modifie et le sauvegarde quelque part.
// enregistré dans le navigateur.


// Juste avant que ce soit monté, on va utilisé componentWillMount
// juste avant que le rendu soit lancé.
// localStorage.getItem('text'); => on crée un item, ici on le récupére, et on récupere text.
// console.log(localStorageText); => on vérifie dans la console.
// crée une condition


  componentWillMount() {
    const localStorageText = localStorage.getItem('text');
    if (localStorageText) {
      this.setState({text: localStorageText});
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('text', nextState.text);

  }


//fonction

  // dans ce bout code de editText, c'est ici qu'on va target la valeur de l'event.
  // et on incorpore this.setState({text});
  // Mettre à jour, Modifier le State, attention aucun changement ne sera sauvegardé
  // si on actualise la page.

  editText = (event) => {
    const text = event.target.value;
    // console.log(text);
    this.setState({text});
  };


//
// marked => c'est le plugin.
// sanitize => Dans votre code Html, si un utilisateur change ou ajoute une balise.
// cette fonction permet de ne pas etre utiliser à tout le monde.
// attribué un ojet dans return
// {__html:renderText} => Modifier par un utilisateur, crée un objet HTml, attribue dans un objet React.
// et on va dans notre methode render ajouter dangerouslySetInnerHTML
  renderText = (text) => {
    const renderText = marked(text, {sanitize:true});
    return { __html:renderText };
  };


// C'est dans cette méthode render qu'on va écrire notre Html dans React.
// On crée une State dans la class avant le code render.
// On modifie dans la balise textarea
// On rajoute une value = {this.state.text}
// this => sélectionne où on est; state => appeller la fonction; text => le nom d'une propriété state;
// Avec ceci, nous pouvons réutiliser ce state à n'importe quel autre moment de la page.

//Pour modifier le State :
// on rajoute une autre propriété dans la balise textarea
// onChange = {(e) => this.editText (e)}
// onChange => si on veut faire un changement; (e) => appel à un event.
// => fonction fléché.
// editText(e) => éditer le texte, le modifier à partir de l'event e.
// {} Appel fonction JS


//<div dangerouslySetInnerHTML = {this.renderText(this.state.text)}/>
// dangerouslySetInnerHTML => React oblige , attention c'est quelque chose donné par l'utilisateur.


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              value={this.state.text}
              rows="35"
              className="form-control"
              onChange={(e) => this.editText(e)}
            >
            </textarea>
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
          </div>
        </div>
      </div>
    )
  }
}


// C'est ici qu'on va appeler la fonction render, on met entre </> App
// car c'est la nom de la class que nous avons défini au dessus.

// document.getElementById('root') => on le retrouve dans le fichier index.html
//C'est dans ce fichier qu'on retrouve l id root et c'est là que tout notre fonction sera remplacé.

render(
  <App />,
  document.getElementById('root')
);
