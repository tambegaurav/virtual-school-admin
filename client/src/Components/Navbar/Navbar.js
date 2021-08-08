/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import useStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };
  console.log(user);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          component={Link}
          to="/"
          variant="h2"
          align="center"
        >
          Virtual-School
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Button
              component={Link}
              to="/dashboard"
              variant="contained"
              color="primary"
            >
              Dashboard
            </Button>

            <Typography className={classes.userName} variant="h6">
              {user?.name}
            </Typography>

            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Log In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
