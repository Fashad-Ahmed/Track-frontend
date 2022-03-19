import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Paper, Typography } from "@material-ui/core";
import { SERVER_URL } from "../../../constants";
import { useHistory } from "react-router-dom";
import "./styles.css";

const AccountForm = () => {
  const history = useHistory();
  const [account, setAccount] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [accountBalance, setAccountBalance] = useState(0);

  const accounts = ["Income", "Expense"];

  const names = ["Cash", "Bank"];

  const paperStyle = {
    padding: 20,
    height: "66vh",
    width: 400,
    margin: "20px auto",
  };
  const headerStyle = { margin: 0, paddingTop: 5 };
  const fieldStyle = { margin: "12px 0" };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAccount(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeAccount = (event) => {
    const {
      target: { value },
    } = event;
    setAccountName(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let date = new Date().toLocaleString();
    date = date.toString();

    const user = {
      account: account[0],
      accountName: accountName[0],
      accountType,
      accountBalance,
      accountTime: date,
      userId: localStorage.getItem("token"),
    };

    console.log(user);
    if (
      account !== "" &&
      accountName !== "" &&
      accountType !== "" &&
      accountBalance !== 0
    ) {
      try {
        fetch(SERVER_URL + "/account/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        })
          .then(() => {
            console.log("data added successfully");
            history.push("/dashboard");
          })
          .catch(() => {
            console.log("Unable to add");
          });
      } catch (err) {
        console.log("Not added!");
        history.push("/dashboard");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleCancel = () => {
    history.push("/dashboard");
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="left">
          <div>
            <h2 style={headerStyle}>Create</h2>
          </div>
          <Typography
            variant="caption"
            style={{ color: "grey" }}
            gutterBottom
          ></Typography>
        </Grid>
        <div>
          <FormControl fullWidth style={fieldStyle}>
            <InputLabel id="demo-simple-select-label">Account</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={account}
              label="Account"
              onChange={handleChange}
            >
              {accounts.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth style={fieldStyle}>
            <InputLabel id="demo-simple-select-label">Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={accountName}
              label="name"
              onChange={handleChangeAccount}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Type"
            name="type"
            placeholder="Enter account type"
            style={fieldStyle}
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            fullWidth
            required
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Balance"
            name="balance"
            placeholder="Enter account balance"
            style={fieldStyle}
            value={accountBalance}
            onChange={(e) => setAccountBalance(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div>
          <div className="outer">
            <div className="inner">
              <Button
                onClick={handleSubmit}
                variant="contained"
                className="button"
                sx={{ m: 1 }}
                medium
              >
                Submit
              </Button>
            </div>

            <div className="inner">
              <Button
                onClick={handleCancel}
                className="button"
                variant="outlined"
                sx={{ m: 1 }}
                medium
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default AccountForm;
