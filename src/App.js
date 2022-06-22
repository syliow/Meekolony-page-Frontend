import "./App.css";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { axiosInstance } from "./config";
import { Box, Typography } from "@material-ui/core";
import CardGrid from "./components/cardGrid";

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
        <Typography>Floor price: {data.floorPrice / 1000000000}</Typography>
        <Typography>
          Total Volume: {(data.volumeAll / 1000000000).toFixed(2)}
        </Typography>
        <Typography>
          Avg Sale Price: {(data.avgPrice24hr / 1000000000).toFixed(2)}
        </Typography>
        <Typography>Total Listed Count: {data.listedCount}</Typography>
      </Box>
      {/* <h3>Listings: {listings.length}</h3> */}
      <h3>Sales: {sales.length}</h3>

      <CardGrid />

      <br />
      <h1>Meekolony Holder Page</h1>
      <form
      // onSubmit={this.handleSubmit}
      >
        <label>
          Wallet Address: {""}
          <input
            type="text"
            // value={this.state.value}
            // onChange={this.handleChange}
          />
        </label>{" "}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
