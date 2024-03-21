
import React from "react";
import { Typography } from "@mui/material";
import WatchList from "../components/WatchListComponent/index.jsx";
import "../App.css";


function Watchlist() {
  return (
    <Typography variant="h6" component="div">
      <WatchList />
    </Typography>
  );
}

export default Watchlist;
