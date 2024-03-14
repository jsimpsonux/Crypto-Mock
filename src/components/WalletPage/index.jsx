import React from "react";
import "./style.css";
import Funds from "../Funds";
import Remaining from "../Remaining";
import PurchaseList from "../PurchasedList";

const WalletPage = () => {
  return (
    <div className="container">
      <div className="row">
        <Funds />
        <Remaining />
      </div>
      <h3>Purchase History</h3>
      <div>
        <PurchaseList />
      </div>
    </div>
  );
};

export default WalletPage;
