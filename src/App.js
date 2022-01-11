import React from 'react';
import './style.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todos = [
  {
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
  },
  {
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  handleClearTodos = ()=> {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => {
        return !item.completed;
      })
    });
  }

  handleAddTodo = (todoName)=> {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleToggleTodo = (selectedTodo) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(item => {
        if(item.id === selectedTodo.id){
          return({
            ...item,
            completed: !item.completed
          })
        } else {
          return item;
        }
      })
    })
  }
  
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList handleToggleTodo={this.handleToggleTodo} todos={this.state.todos}/>
        <TodoForm handleAddTodo={this.handleAddTodo} />
        <button onClick={this.handleClearTodos}>Clear completed</button>
      </div>
    );
  }
}

export default App;
