import React, { useState, useEffect } from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";

import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { SERVER_URL } from "../../../constants";
import { useHistory, Link } from "react-router-dom";
// import './styles.css';

const Signup = () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  const headerStyle = { margin: 0, paddingTop: 5 };
  const btnStyle = { textAlign: "center" };

  const onSubmit = (e) => {
    console.log(username, email, password);
    const user = {
      userName: username,
      email,
      password,
    };

    try {
      fetch(SERVER_URL + "/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(() => {
          console.log("data added successfully");
        })
        .catch(() => {
          console.log("Unable to add  user");
        });
    //   history.push("/login");
    } catch (err) {
      console.log("User Not Registered!");
        // history.push("/login");
    }
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="left">
          <div>
            <h2 style={headerStyle}>Sign up</h2>
          </div>
          <Typography variant="caption" style={{ color: "grey" }} gutterBottom>
            Get started for free
          </Typography>
        </Grid>

        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="password"
          fullWidth
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box paddingTop={2} />
        {/* <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the Terms & Conditions." */}
        {/* /> */}
        <Box paddingTop={2} />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          style={btnStyle}
          onClick={onSubmit}
        >
          Sign up
        </Button>
      </Paper>
    </Grid>
  );
};

export default Signup;
