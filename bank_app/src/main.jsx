import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import './index.css';
import Signin from './Pages/Signin';

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signin" component={Signin} />
    </Switch>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
