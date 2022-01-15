import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './components/About';
import App from './App';
import Card from './components/Card';
import Contact from './components/Contact';
import Home from './components/Home';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<App />}>
            <Route exact path='' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/:user' element={<Card />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
