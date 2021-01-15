import './App.css';
import Login from './EntryPage/login.js'
import Signup from './EntryPage/signup.js'
import ForgotPassword from './EntryPage/forgotpassword.js'
import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './HomePage/home.js'
import NotFound from './Common/notfound.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path={["/","/homepage","/home"]} exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component= {Signup} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
  
}


