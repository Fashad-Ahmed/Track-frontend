import React from "react";
import MUIDataTable from "mui-datatables";

const Transaction = () => {
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

  const columns = [
    "Transaction type",
    "Amount",
    "Category",
    "Account",
    "Date|Time",
  ];

  // accountBalance: 100
  // accountName: "Cash"
  // accountTime: "3/19/2022, 5:25:40 PM"
  // accountType

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  return (
    <MUIDataTable
      title={"Transactions"}
      // data={tableData.map((item) => {
      //   return [item.caption, item.score];
      // })}
      data={data}
      columns={columns}
      style={{ width: "25%" }}
      options={options}
    />
  );
};

export default Transaction;
