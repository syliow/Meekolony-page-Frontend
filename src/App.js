import "./App.css";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { axiosInstance } from "./config";
import { Box, Typography } from "@material-ui/core";
import CardGrid from "./components/CardGrid";
import NavigationTab from "./components/NavigationTab";
import WalletChecker from "./components/AddressChecker";

function App() {
  const [data, setData] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchMarketplaceData = async () => {
      const { data } = axiosInstance.get("/nft").then((res) => {
        setData(res.data);
      });
    };

    const fetchNftSales = async () => {
      const { data } = axiosInstance.get("/nft/sales").then((res) => {
        setSales(res.data);
      });
    };

    fetchMarketplaceData();
    fetchNftSales();
  }, []);

  return (
    <div className="App">
      <h1>Meekolony Collection Page</h1>
      <Box>
        <Typography>Floor price: {data.floorPrice / 1000000000} SOL</Typography>
        <Typography>
          Total Volume: {(data.volumeAll / 1000000000).toFixed(2)}
        </Typography>
        <Typography>
          Avg Sale Price: {(data.avgPrice24hr / 1000000000).toFixed(2)} SOL
        </Typography>
        <Typography>Total Listed Count: {data.listedCount}</Typography>
      </Box>
      <NavigationTab />
      <br />
    </div>
  );
}

export default App;
