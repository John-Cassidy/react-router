import React, { Component } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ThemeContext.Consumer>
              {(context) => {
                const { isDarkTheme, darkTheme, lightTheme } = context;
                const { isLoggedIn, changeAuthStatus } = authContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                return (
                  <nav
                    style={{
                      background: theme.background,
                      color: theme.text,
                      height: '120px',
                    }}
                  >
                    <h2 style={{ textAlign: 'center', paddingTop: '10px' }}>
                      Oak Academy
                    </h2>
                    <p
                      onClick={changeAuthStatus}
                      style={{ textAlign: 'center' }}
                    >
                      {isLoggedIn ? 'logged in' : 'logged out'}
                    </p>
                    <div className='three ui buttons'>
                      <button className='ui button'>Overview</button>
                      <button className='ui button'>Contact</button>
                      <button className='ui button'>Support</button>
                    </div>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
