import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
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
