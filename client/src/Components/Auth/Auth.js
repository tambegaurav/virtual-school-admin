import React, { useState } from "react";
import { Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import Input from "./Input";
import { signin, signup } from "../../Redux/Auth/action.js";
const initialState = {
  name: "",
  school_name: "",
  email: "",
  password: "",
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState(initialState);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Typography component="h1" variant="h5">
          {isSignup ? "REGISTER" : "LOG IN"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="name"
                  label="Enter Your Name"
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="school_name"
                  label="School Name"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type="password"
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "REGISTER" : "SIGN IN"}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? (
                  <div>
                    <span>Already have an account?</span>
                    <span style={{ color: "blue" }}> LOG IN</span>
                  </div>
                ) : (
                  <div>
                    <span>Don't have an account? </span>
                    <span style={{ color: "blue" }}> SIGN UP</span>
                  </div>
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
