import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // TODO make a call to the rails to grab all the todo item
    axios.get('/api/items')
      .then( res => {
        // TODO set state of todo to the ones we have from db
        this.setState({ todos: res.data })
      })
      .catch( err => {
         console.log(err)
      })
  }

  addItem = (incommingTodo) => {
    // TODO add the new todo in the db
    const item = incommingTodo
    axios.post('/api/items', { item })
      .then( res => {
        // TODO add todo to client state
        const { todos } = this.state
        this.setState({ todos: [ ...todos, res.data ] })
      })
      .catch( err => {
        console.log(err)
     })
  }

  updateTodo = (id) => {
    // TODO update the todo with id in the db
    // TODO update the todo with the id in the state
  }

  deleteTodo = (id) => {
    // TODO make api call to delete item with id in db
    // TODO delete item with id in state
  }

  render() {
    const { todos } = this.state
    return (
      <Container>
        <TodoForm add={this.addItem} />
        <TodoList todos={ todos } />
      </Container>
    )
  }
}

export default App;
