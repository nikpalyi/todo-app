import React, { Component } from 'react';
import './App.css';

import TodoInput from './TodoInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index;
      })
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1>React ToDo Application</h1>
        </div>
        <TodoInput onAddTodo={this.handleAddTodo} />
        <hr />
        <h4>
          Todo Count: <span className='badge'>{this.state.todos.length}</span>
        </h4>
        <ul className='list-group'>
          {this.state.todos.map((todo, index) => (
            <li className='list-group-item' key={index}>
              <h4 className='list-group-item-heading'>
                {todo.todoTitle}{' '}
                <small>
                  <span className='label label-info'>{todo.todoPriority}</span>
                </small>
              </h4>
              <p>
                <span
                  className='glyphicon glyphicon-user'
                  aria-hidden='true'
                ></span>{' '}
                {todo.todoResponsible}
              </p>
              <p>{todo.todoDescription}</p>
              <button
                className='btn btn-danger btn-sm'
                onClick={this.handleRemoveTodo.bind(this, index)}
              >
                <span
                  className='glyphicon glyphicon-trash'
                  aria-hidden='true'
                ></span>{' '}
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
