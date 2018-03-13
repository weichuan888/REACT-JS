import React, { Component } from 'react';

export default class TodoForm extends Component {
  AddTodo(event){
    event.preventDefault();
    const txt = this.ToDoTitle.value;
    this.props.onNewTodo({
      title: txt,
      done: false,
      createdAt: new Date()
    })
  }
  render() {
    return (
      <div className="liste">
        <form>
            <input type="text" ref={(input) => this.ToDoTitle = input} />
            <button onClick={this.AddTodo.bind(this)}>Ajouter</button>
        </form>
      </div>
    );
  }
}
// utilisation de state
