import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import data from "../data/crypto.json";
import CryptoItem from "./CryptoItem";



function RemainingFunds() {
  return (
    <div>
      <h3>Balance</h3>
      <Alert variant="filled" severity="info">
        {/* Remaining funds: {remainingFunds} */}
        880
      </Alert>
    </div>
  );
}

export default RemainingFunds;
