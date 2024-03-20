import React from "react";
import { Typography } from "@mui/material";
import WatchlistComponent from "../components/WatchlistComponent";

function Watchlist() {
  return (
    <Typography variant="h6" component="div">
      <WatchlistComponent />
    </Typography>
  );
}

export default Watchlist;
