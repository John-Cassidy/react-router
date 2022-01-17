import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';

import About from './components/About';
import App from './App';
import Card from './components/Card';
import Contact from './components/Contact';
import Home from './components/Home';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

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
