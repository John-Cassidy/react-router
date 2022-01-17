import AuthContextProvider from './contexts/AuthContext';
import Navbar from './components/Navbar';
import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <div className='ui raised very padded text container segment'>
        <AuthContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <TodoList />
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
