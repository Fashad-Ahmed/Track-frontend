import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Account from "./Account/index";
import Balance from "./Balance/index";
import Transaction from "./Transaction/Transaction";
import { SERVER_URL } from "../../constants";

const Dashboard = () => {
  const history = useHistory();
  const [tableData, setTableData] = useState([]);

  const handleAdd = (e) => {
    console.log("handleAdd");
    history.push("/add-account");
  };

  useEffect(() => {
    const user = localStorage.getItem("token");
    console.log(user);
    fetch(SERVER_URL + `/account/show`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setTableData(result.getAccounts);
      });
  }, []);

  const props = {
    tableData,
    setTableData,
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
              <div style={{ marginLeft: "180px" }}>
                <Grid item xs={2}>
                  <Account {...props} />
                </Grid>
              </div>
            </Grid>
            <Grid container>
              <Box m={1} pt={0}>
                <Button
                  className="btn-save"
                  color="primary"
                  size="small"
                  variant="contained"
                  style={{
                    marginTop: "20px",
                    textAlign: "center",
                    marginLeft: "960px",
                  }}
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
