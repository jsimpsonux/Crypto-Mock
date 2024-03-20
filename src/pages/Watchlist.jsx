import React from "react";
import { Typography } from "@mui/material";
import WatchList from "../components/WatchlistComponent/index";
import "../App.css";

const Watchlist = () => {
  return (
    <Typography variant="h6" component="div">
      <WatchList />
    </Typography>
  );
};

export default Watchlist;
