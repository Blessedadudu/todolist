import React, { Component } from 'react';
import Todos from './components/Todos';
import AddItems from './AddItems'

class App extends Component {
  state = {
    todos: []
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState ({
      todos: todos
    })
  }

  addItems = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  } 
  render () {
    return (
      <div className="todo-app collection-item container">
        <h1 className="center grey-text text-lighten-1" >TodoList</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddItems addItems={this.addItems}/>
      </div>
  );
  }
 
}

export default App;
