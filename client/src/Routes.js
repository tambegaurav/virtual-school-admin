import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Lecture from "./Components/Lecture/Lecture";
import Navbar from "./Components/Navbar/Navbar";
import Student from "./Components/Student/Student";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/createLecture" exact>
          <Lecture />
        </Route>
        <Route path="/createStudent" exact>
          <Student />
        </Route>
        <Route>
          <h2>404: Page Not Found</h2>
          <Link to="/" replace>
            Home
          </Link>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
