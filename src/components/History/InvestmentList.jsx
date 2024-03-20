import React, { useState } from "react";
import InvestmentItem from './InvestmentItem';


function InvestmentList() {

  const [puchasedCoins, setPurchasedCoins] = useState({})

  // const puchasedCoins = [
  //   { id: 79797, coin: "Bitcoin", img: "🍎", cost: 56 },
  //   { id: 23357, coin: "Ethereum", img: "🥝", cost: 36 },
  //   { id: 65497, coin: "Solana", img: "🌸", cost: 67 },
  //   { id: 12497, coin: "Cardano", img: "🥝", cost: 16 },
  //   { id: 98697, coin: "Avalanche", img: "🍒", cost: 96 },
  // ];

  return (
    <ul>
      {puchasedCoins.map((item) => (
        <InvestmentItem
        key={item.id}
        img={item.img}
          id={item.id}
          coin={item.coin}
          cost={item.cost}
        />
      ))}
    </ul>
  );
}

export default InvestmentList;
