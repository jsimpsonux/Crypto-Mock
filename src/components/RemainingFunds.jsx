import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import data from "../data/crypto.json";

// const getPurchasedCoins = () => {
//   const data = JSON.parse(localStorage.getItem("purchasedCoins"));
//   if (!data) return [];
//   return data;
// };

function RemainingFunds() {
  // const [purchasedCoins, setPurchasedCoins] = useState(getPurchasedCoins)

  //   const totalInvestments = investments.reduce((total, item) => {
  //     return (total = total + item.cost)
  //   }, 0)

  //   const remainingFunds = funds - totalInvestments

  //   useEffect(() => {
  //     localStorage.setItem("purchasedItems", JSON.stringify(purchasedCoins));
  //   }, [purchasedCoins])

  // const alertType = totalInvestments > funds ? 'warning' : 'info'

  return (
    <div>
      <h3>Remaining</h3>
      <Alert variant="filled" severity="info">
        {/* Remaining funds: {remainingFunds} */}
        880
      </Alert>
    </div>
  );
}

export default RemainingFunds;
