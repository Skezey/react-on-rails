import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    // TODO make a call to the rails end to grab all todos
    // TODO set state of todo to what is in the database
  }

  addItem = (incomingTodo) => {
    // TODO add the new todo to the rails DB
    // TODO update cleint state
  }

  updateTodo = (id) => {
    // TODO update the todo with ID in the db
    // TODO update todo with the ID in the state
  }

  deleteTodo = (id) => {
    // TODO make API call to delete item with ID in db
    // TODO delete item with ID in state
  }

  render() {
    return (
      <Container>

      </Container>
    )
  }
}

export default App;
