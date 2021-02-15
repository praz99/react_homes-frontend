import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../layouts/Login';
import Signup from '../layouts/Signup';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/mainPage" component={MainPage} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
