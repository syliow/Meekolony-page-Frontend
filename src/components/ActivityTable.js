import React, { useEffect, useState, forwardRef } from "react";
import MaterialTable from "material-table";
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from "@material-ui/icons";
import { axiosInstance } from "../config";
import { Box, Typography, Button, Link } from "@material-ui/core";
import moment from "moment";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export default function ActivityTable() {
  const [data, setData] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axiosInstance.get("/nft/sales").then((res) => {
      setSales(res.data);
    });
  }, []);

  return (
    <MaterialTable
      icons={tableIcons}
      title="Recent Sales"
      columns={[
        {
          title: "Transaction ID",
          field: "signature",
          render: (row) => {
            return (
              <Button
                style={{ textTransform: "none", cursor: "pointer" }}
              >
                <Typography
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    width: "100%",
                    textOverflow: "clip ellipsis clip 0 3ch",
                    cursor: "pointer",
                  }}
                >
                  {row.signature}
                </Typography>
              </Button>
            );
          },
        },
        {
          title: "Transaction Type",
          field: "type",
          render: (row) => {
            return <Box>{row.type === "buyNow" ? "Sale" : " Listed"}</Box>;
          },
        },
        {
          title: "Time",
          field: "blockTime",
          render: (row) => {
            return (
              <Box>
                {moment.unix(row.blockTime).format("YYYY-MM-DD HH:mm:ss")}
              </Box>
            );
          },
        },
        {
          title: "Total Amount",
          field: "price",
          render: (row) => {
            return <Box>{row.price} SOL</Box>;
          },
        },
        { title: "Mint Address", field: "tokenMint" },
      ]}
      data={sales}
    />
  );
}
