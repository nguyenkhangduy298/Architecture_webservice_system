import './App.css';
import Login from './Login/login.js'
import Signup from './Login/signup.js'
import ForgotPassword from './Login/forgotpassword.js'
import { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Login/home.js'
import NotFound from './Common/notfound.js'


// const ProtectedRoute = ({component: Component, loggedIn, path, ...rest }) => {
//   return (
//     <Route 
//       path={path}
//       {...rest}
//       render={(props) => {
//         console.log("Home : " + loggedIn);
//         return loggedIn === 'true' ? <Component {...props} /> :
//          <Redirect to="/login" />;
//       }}
//       />
//   );
// };

export default class App extends Component {
  constructor(props) {
    super(props);
  }

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


