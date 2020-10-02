import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Main/>
      </Switch>
    </Router>
  );
}

export default App;
