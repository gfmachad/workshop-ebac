import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/';
import ProfilePage from '../pages/profile';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users/:userLogin" component={ProfilePage} />
      </Switch>
    </Router>
  );
}
