import React from "react";
import MUIDataTable from "mui-datatables";

const Transaction = (props) => {
  const data = props.tableData;

  const columns = [
    {
      label: "Transaction type",
      name: "account",
    },
    {
      label: "Amount",
      name: "accountBalance",
    },
    {
      label: "Category",
      name: "accountType",
    },
    {
      label: "Account",
      name: "accountName",
    },
    {
      label: "Date|Time",
      name: "accountTime",
    },
  ];

  const options = {
    sort: true,
    sortDirection: "desc",
    filterType: "dropdown",
    responsive: "stacked",
    filter: false,
    download: false,
    print: false,
    search: false,
    selectableRows: false,
    viewColumns: false,
  };

  return (
    <MUIDataTable
      title={"Transactions"}
      data={data}
      columns={columns}
      style={{ width: "25%" }}
      options={options}
    />
  );
};

export default Transaction;
