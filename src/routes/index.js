import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
import AccountForm from "../components/Dashboard/Form/index";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add-account" component={AccountForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
