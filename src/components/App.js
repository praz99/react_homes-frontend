import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from '../layouts/Signup';
import HouseList from '../containers/HouseList';
import HouseDetails from './HouseDetails';
import LandingPage from './LandingPage';
import NotFound from '../layouts/NotFound';
import Appointment from './Appointment';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/houses" component={HouseList} />
        <Route exact path="/houses/:id" component={HouseDetails} />
        <Route exact path="/houses/:house_id/make-appointment" component={Appointment} />
        <Route exact path="/signup" component={Signup} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
