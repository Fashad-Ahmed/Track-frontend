import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Account = () => {
  return (
    <Card sx={{ minWidth: 475 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}  gutterBottom>
          Accounts
        </Typography>
        <Typography variant="h8" component="div">
         CASH                                         PKR
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>
        <Typography variant="body2">
        </Typography>
        <Typography variant="h8" component="div">
         BANK                                         PKR
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Account;
