import React, { useContext } from 'react';

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
  const { todos } = useContext(TodoListContext);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <div
      className='ui list'
      style={{
        background: theme.background,
        color: theme.text,
        height: '140px',
        textAlign: 'center',
        paddingTop: '20px',
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p key={todo.id} className='item'>
              {todo.text}
            </p>
          );
        })
      ) : (
        <div>You have no todos</div>
      )}
      <button className='ui button primary' onClick={changeTheme}>
        change the theme
      </button>
    </div>
  );
};

export default TodoList;
