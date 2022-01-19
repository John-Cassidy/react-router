import React, { useContext, useState } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext } from '../contexts/TodoListContext';

// class TodoList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (
//       <div
//         className='ui list'
//         style={{
//           background: theme.background,
//           color: theme.text,
//           height: '140px',
//           textAlign: 'center',
//           paddingTop: '20px',
//         }}
//       >
//         <p className='item'>Plan the family trip</p>
//         <p className='item'>Go shopping for dinner</p>
//         <p className='item'>Go for a walk</p>
//         <button className='ui button primary' onClick={changeTheme}>
//           change the theme
//         </button>
//       </div>
//     );
//   }
// }

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const { todos, dispatch } = useContext(TodoListContext);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: 'ADD_TODO', text: todo });
    setTodo('');
  };

  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    dispatch({ type: 'REMOVE_TODO', id: id });
  };

  return (
    <div
      className='ui list'
      style={{
        background: theme.background,
        color: theme.text,

        textAlign: 'center',
        paddingTop: '20px',
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p
              id={todo.id}
              onClick={handleRemoveTodo}
              key={todo.id}
              className='item'
            >
              {todo.text}
            </p>
          );
        })
      ) : (
        <div>You have no todos</div>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlfor='todo'>Add todo:</label>
        <input type='text' value={todo} id='todo' onChange={handleChange} />
        <input
          type='submit'
          value='Add new todo'
          className='ui button primary'
        />
      </form>
      <button className='ui button primary' onClick={changeTheme}>
        change the theme
      </button>
    </div>
  );
};

export default TodoList;
