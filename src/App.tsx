import './App.css';
import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import InputCurrency from './components/input-currency';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>

      <InputCurrency width={'100px'} decimals={8}/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Provider>
  );
}

export default App;
