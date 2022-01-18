import React, { Component, useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

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
      <p className='item'>Plan the family trip</p>
      <p className='item'>Go shopping for dinner</p>
      <p className='item'>Go for a walk</p>
      <button className='ui button primary' onClick={changeTheme}>
        change the theme
      </button>
    </div>
  );
};

export default TodoList;
