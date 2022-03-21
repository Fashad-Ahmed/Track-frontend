import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Balance = (props) => {
  const balance = props.tableData;
  const totalBalance = balance.reduce((acc, curr) => {
    return acc + curr.accountBalance;
  }, 0);

  return (
    <Card sx={{ minWidth: 375 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Current Balance
        </Typography>
        <Typography variant="h4" component="div">
          {totalBalance} PKR /-
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Balance;
