import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Pay bills', id: 1 },
    { text: 'Do your homework', id: 1 },
    { text: 'Feed the dog', id: 3 },
  ]);

  const addTodo = () => {
    setTodos([...todos, { text: 'Feed the cat', id: todos.length + 1 }]);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
      <button onClick={addTodo}>Add a todo</button>
    </div>
  );
};

export default TodoList;
