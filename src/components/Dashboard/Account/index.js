import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Account = (props) => {
  const balance = props.tableData;

  const totalBankBalance = balance.reduce((acc, curr) => {
    return curr.accountName === "Bank" ? acc + curr.accountBalance : acc + 0;
  }, 0);

  console.log(totalBankBalance);
  const totalCashBalance = balance.reduce((acc, curr) => {
    return curr.accountName === "Cash" ? acc + curr.accountBalance : acc + 0;
  }, 0);

  console.log(totalCashBalance);
  return (
    <Card sx={{ minWidth: 475 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Accounts
        </Typography>
        <Typography variant="h8" component="div">
          <b>CASH</b>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {totalCashBalance} PKR/-
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Typography variant="body2"></Typography>
        <Typography variant="h8" component="div">
          <b>BANK</b>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {totalBankBalance} PKR/-
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Account;
