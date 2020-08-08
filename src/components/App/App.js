import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import UserCreate from "../user/user-create";
import UserEdit from "../user/user-edit";
import UserList from "../user/user-list";

// const About = lazy(() => import('./routes/About'));


class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/users" className="navbar-brand">
              React
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/users"} className="nav-link">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/users/create"} className="nav-link">
                  Create User
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/users"]} component={UserCreate} />
              <Route exact path="/users/create" component={UserCreate} />
              <Route path="/users/edit/:id" component={UserEdit} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
