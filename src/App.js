import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sign_in from './Sign_in';
import Sign_in_forgot from './Sign_in_forgot';
import Sign_up from './Sign_up';
import Home from './Home';
import Addphonenum from './Addphonenum';
import Getstarted from './Getstarted';
import Devices from './Devices';
import Report from './Report';
import Add_device from './Add_device';

function App() {

  return (
    <Router>
      <div>      
        <Switch>
          <Route exact path="/">
            <Sign_in/>
          </Route>
          <Route exact path="/sign_in_forgot">
            <Sign_in_forgot/>
          </Route>
          <Route exact path="/sign_up">
            <Sign_up/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/add_phone_number">
            <Addphonenum/>
          </Route>
          <Route exact path="/get_started">
            <Getstarted/>
          </Route>
          <Route exact path="/devices">
            <Devices/>
          </Route>
          <Route exact path="/report">
            <Report/>
          </Route>
          <Route exact path="/add_device">
            <Add_device/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;