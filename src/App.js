import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Routes from "./routes";
import Dashboard from "./components/Auth/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <>
      {/* <Routes /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <Dashboard />
    </>
  );
}

export default App;
