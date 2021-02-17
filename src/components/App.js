import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../layouts/Login';
import Signup from '../layouts/Signup';
import HouseList from '../containers/HouseList';
import LandingPage from './LandingPage';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/houses" component={HouseList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
