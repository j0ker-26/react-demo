import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: 'eat', done: true },
      { id: '002', name: 'sleep', done: true },
      { id: '003', name: 'code', done: false }
    ]
  }

  addTodo = (todoObj) => {
    const { todos } = this.state,
      newTodo = [todoObj, ...todos];
    this.setState({
      todos: newTodo
    });
  }

  updateTodo = (id, done) => {
    const { todos } = this.state,
      newTodos = todos.map(todo => {
        if (todo.id === id) return { ...todo, done }
        else return todo
      })
    this.setState({ todos: newTodos });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos}
            updateTodo={this.updateTodo} />
          <Footer />
        </div>
      </div>
    )
  }
}
