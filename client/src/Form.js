import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTask: '',
      todoDescription: '',
      todoPriority: '1 High'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTask: '',
      todoDescription: '',
      todoPriority: '1 High'
    });
  }
  render() {
    return (
      <div>
        <h4>Add New Task</h4>
        <form className='form-horizontal' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='inputTodoTask' className='col-sm-2 control-label'>
              Todo Task
            </label>
            <div className='col-sm-10'>
              <input
                name='todoTask'
                type='text'
                className='form-control'
                id='inputTodoTask'
                value={this.state.todoTask}
                onChange={this.handleInputChange}
                placeholder='Type here your task..'
                required
              ></input>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='inputTodoDesc' className='col-sm-2 control-label'>
              Description
            </label>
            <div className='col-sm-10'>
              <textarea
                name='todoDescription'
                className='form-control'
                rows='2'
                id='inputTodoDesc'
                value={this.state.todoDescription}
                onChange={this.handleInputChange}
                placeholder='Type your task in detail..'
              ></textarea>
            </div>
          </div>
          <div className='form-group'>
            <label
              htmlFor='inputTodoPriority'
              className='col-sm-2 control-label'
            >
              Priority
            </label>
            <div className='col-sm-10'>
              <select
                name='todoPriority'
                className='form-control'
                id='inputTodoPriority'
                value={this.state.todoPriority}
                onChange={this.handleInputChange}
              >
                <option>1 High</option>
                <option>2 Medium</option>
                <option>3 Low</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
              <button type='submit' className='btn btn-info'>
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
