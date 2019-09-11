import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: '3 Low'
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
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: '3 Low'
    });
  }
  render() {
    return (
      <div>
        <h4>Add New Todo</h4>
        <form className='form-horizontal' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='inputTodoTitle' className='col-sm-2 control-label'>
              Todo
            </label>
            <div className='col-sm-10'>
              <input
                name='todoTitle'
                type='text'
                className='form-control'
                id='inputTodoTitle'
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder='Title'
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
                rows='3'
                id='inputTodoDesc'
                value={this.state.todoDescription}
                onChange={this.handleInputChange}
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
