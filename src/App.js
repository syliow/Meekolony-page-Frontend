import "./App.css";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { axiosInstance } from "./config";

function App() {
  const [data, setData] = useState([]);
  const [listings, setListings] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchMarketplaceData = async () => {
      const { data } = axiosInstance.get("/nft").then((res) => {
        setData(res.data);
      });
    };

    const fetchNftListings = async () => {
      const { data } = axiosInstance.get("/nft/listings").then((res) => {
        setListings(res.data);
      });
    };
    const fetchNftSales = async () => {
      const { data } = axiosInstance.get("/nft/sales").then((res) => {
        setSales(res.data);
      });
    };

    fetchMarketplaceData();
    fetchNftListings();
    fetchNftSales();
  }, []);

  return (
    <div className="App">
      <h1>Meekolony Collection Page</h1>
      <h3>Data: {JSON.stringify(data)}</h3>
      <h3>Listings: {listings.length}</h3>
      <h3>Sales: {sales.length}</h3>

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
