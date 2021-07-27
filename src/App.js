import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import { AuthProvider } from '../src/components/Auth';
import PrivateRoute from './components/PrivateRoute';
import LoggedIn from './components/LoggedIn';


function App() {
  return (
    <AuthProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/logout" component={Logout}/>
            <PrivateRoute path="/logged-in" component={LoggedIn}/>
          </Switch>
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
