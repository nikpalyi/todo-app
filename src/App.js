import React, { Component } from 'react';

import Form from './Form';
import { todos } from './todos';

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
          <h1>React ToDo Task Application</h1>
        </div>
        <Form onAddTodo={this.handleAddTodo} />
        <hr />
        <h4>
          Todo Counting:{' '}
          <span className='badge'>{this.state.todos.length}</span>
        </h4>
        <ul className='list-group'>
          {this.state.todos.map((todo, index) => (
            <li className='list-group-item' key={index}>
              <h4 className='list-group-item-heading'>
                {todo.todoTask}{' '}
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
