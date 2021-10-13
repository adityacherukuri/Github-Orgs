import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Alert from "./components/Alert";
import Organization from "./components/organizations/Organization";
import PageNotFound from "./components/PageNotFound";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import RepoDetail from "./components/repositories/RepoDetail";

const App = () => {
  return (
    <AlertState>
      <GithubState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/orgs/:login" component={Organization} />
                <Route exact path="/orgs/:login/:name" component={RepoDetail} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  );
};

export default App;
