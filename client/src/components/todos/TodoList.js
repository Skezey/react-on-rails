import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, update }) => (
  <div>
    {
      todos.map( todo =>
        <TodoItem
          key={todo.id}
          {...todo}
          update={ update }
        />
      )
    }
  </div>
)

export default TodoList;
