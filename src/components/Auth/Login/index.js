import React, { useState } from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { SERVER_URL } from "../../../constants";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    const user = {
      email,
      password,
    };

    try {
      fetch(SERVER_URL + "/auth/signin", {
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
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  const headerStyle = { margin: 0, paddingTop: 5 };
  const btnstyle = { textAlign: "center" };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="left">
          <div>
            <h2 style={headerStyle}>Log in</h2>
          </div>
          <Typography variant="caption" style={{ color: "grey" }} gutterBottom>
            Get started for free
          </Typography>
        </Grid>

        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          fullWidth
          required
        />
        {/* <TextField
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="I Accept Terms & Conditions"
              /> */}
        <Button
          type="submit"
          color="primary"
          variant="contained"
          onClick={handleSubmit}
          style={btnstyle}
          fullWidth
        >
          Sign In
        </Button>
        {/* <Link to="/signup">
          <Typography> Do you have an account ? Sign Up</Typography>
        </Link> */}
      </Paper>
    </Grid>
  );
};

export default Login;
