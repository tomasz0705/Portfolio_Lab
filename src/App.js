import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/" component={Login}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;