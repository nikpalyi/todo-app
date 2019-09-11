import React, { Component } from 'react';
import './App.css';

import TodoInput from './TodoInput';

var todos = [
  {
    todoTitle: 'studying',

    todoDescription: 'Todo description',
    todoPriority: '3 Low'
  },
  {
    todoTitle: 'running',

    todoDescription: 'Todo description',
    todoPriority: '2 Medium'
  },
  {
    todoTitle: 'coding',

    todoDescription: 'Todo description',
    todoPriority: '1 High'
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
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
                  {todo.todoPriority === '1 High' && (
                    <span className='label label-danger'>
                      {todo.todoPriority}
                    </span>
                  )}
                  {todo.todoPriority === '2 Medium' && (
                    <span className='label label-primary'>
                      {todo.todoPriority}
                    </span>
                  )}
                  {todo.todoPriority === '3 Low' && (
                    <span className='label label-success'>
                      {todo.todoPriority}
                    </span>
                  )}
                </small>
              </h4>

              <p>{todo.todoDescription}</p>

              <button
                className='btn btn-info'
                onClick={this.handleRemoveTodo.bind(this, index)}
              >
                <span
                  className='glyphicon glyphicon-trash'
                  aria-hidden='true'
                ></span>{' '}
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
