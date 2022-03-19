import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";

import { useHistory, Link } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Account from "./Account/index";
import Balance from "./Balance/index";
import Transaction from "./Transaction/Transaction";
import { SERVER_URL } from "../../constants";

const Dashboard = () => {
  const history = useHistory();
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const handleAdd = (e) => {
    console.log("handleAdd");
    history.push("/add-account");
  };

  useEffect(() => {
    fetch(SERVER_URL + `/account/${localStorage.getItem("token")}`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        // transactions(result);
        console.log(result);
      });
  }, []);

  const props = {
    tableData,
    setTableData,
    transactions,
    setTransactions,
    accounts,
    setAccounts,
    balance,
    setBalance,
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Navbar />
        <Grid container>
          <div className="main">
            <Grid container>
              <div>
                <Grid item xs={6}>
                  <Balance {...props} />
                </Grid>
              </div>
              <div style={{ marginLeft: "180px"}}>
                <Grid item xs={2}>
                  <Account {...props} />
                </Grid>
                {/* <Grid item xs={2}>
                  <Account {...props} />
                </Grid> */}
              </div>
            </Grid>
            <Grid container>
              <Box m={1} pt={0}>
                <Button
                  className="btn-save"
                  color="primary"
                  size="small"
                  variant="contained"
                  style={{ marginTop: "20px", textAlign: "center" }}
                  onClick={handleAdd}
                >
                  Add +
                </Button>
              </Box>
            </Grid>

            <Grid container>
              <Grid item xs={12}>
                <Transaction {...props} />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
