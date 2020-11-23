import React, { Component } from 'react';
import Todos from './todos';
import AddTodos from './AddTodos';

class App extends Component {

  state = {
    todos : [
      { 'content': 'Welcome To your list', 'id': 0 }
    ]
  }


  addTodo = (newTask) => {
    if(this.state.todos.length > 0){
    newTask.id = this.state.todos[this.state.todos.length-1].id+1;
    }
    else 
    newTask.id = 0;

    let newTodos = [...this.state.todos,newTask];
    this.setState({
      todos : newTodos
    })
  }

  deleteTodo = (id) => {
    const tasks = this.state.todos.filter(task => {
      return task.id !== id
    })

    this.setState({
      todos: tasks
    });
  }
  render() {
    return (
      <div className="list-Container">
        <h1>Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodos addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
