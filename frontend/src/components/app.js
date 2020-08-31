import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import MainPage from "./main/main_page";
import NavBarContainer from '../components/navbar_container';
import LoginFormContainer from '../components/login_form_container';
import SignupFormContainer from "../components/signup_form_container";


const App = () => (
  <div>
    <NavBarContainer/>
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="login" component={LoginFormContainer} />
      <AuthRoute exact path="signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;