import React from 'react';

export default class List extends React.Component {
  test(){
  return 'bonjour';
  }
  render() {
    return (
        <div className="liste">
           {this.props.todos.length}
           {this.test()}
           <button>Machin</button>
        </div>
    );
  }
}

// utilisation de props
