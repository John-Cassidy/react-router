import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './components/About';
import App from './App';
import Contact from './components/Contact';
import Home from './components/Home';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route exact path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
