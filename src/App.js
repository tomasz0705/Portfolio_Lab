import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
    <BrowserRouter basename="put_things_in_good_hands_in-React">
      <>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/logout" component={Logout}/>
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
