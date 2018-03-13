import React, { Component } from 'react';
import List from './List';
import TodoForm from './TodoForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
      todos:[]
  }

  todoToggleState(todo, index) {
    let _todo = todo;
    _todo.done = !todo.done;
    let newTodos = this.state.todos;
    newTodos[index] = _todo;
    this.setState({todos: newTodos})
    console.log(todo, index);
  }

  toggleTodo(todoDone, index) {
    this.props.onTodoToggle(todoDone, index);
    console.log(todoDone)
  }

  showTodos(todos) {
    return (
      todos.map((todo,index) => {
        return (
          <div key={index} className="todo" onclick={() => this.toggleTodo(todo.done)}>
          {todo.title} {todo.done ? 'true' : 'false' }
          </div>
        )}
      ))
  }

  onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <List todos={this.state.todos} onTodoToggle={this.todoToggleState.bind(this)}/>
        <TodoForm onNewTodo={this.onNewTodo.bind(this)} />
        {this.showTodos(this.state.todos)}


      </div>
    );
  }
}

export default App;
