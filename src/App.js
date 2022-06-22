import "./App.css";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { axiosInstance } from "./config";

function App() {
  const [data, setData] = useState([]);
  const [listings, setListings] = useState([]);
  const [sales, setSales] = useState([]);

  const fetchMarketplaceData = async () => {
    const { data } = axiosInstance.get("/nft");
    if (data) {
      setData(data);
      console.log(data, "dataa");
    } else {
      setData("No data!");
    }
  };

  const fetchNftListings = async () => {
    const { data } = axiosInstance.get("/nft/listings");
    if (data) {
      setListings(data);
      console.log(data, "dataa");
    } else {
      setListings("No data!");
    }
  };
  const fetchNftSales = async () => {
    const { data } = axiosInstance.get("/nft/sales");
    if (data) {
      setSales(data);
      console.log(data, "dataa");
    } else {
      setSales("No data!");
    }
  };

  useEffect(() => {
    fetchMarketplaceData();
    fetchNftListings();
    fetchNftSales();
  }, []);

  return (
    <div className="App">
      <h1>Frontend</h1>
      <h3>{data}</h3>
      <h3>{listings}</h3>
      <h3>{sales}</h3>
    </div>
  );
}

export default App;
