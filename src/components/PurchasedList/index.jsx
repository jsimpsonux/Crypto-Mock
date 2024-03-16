import React, { useEffect } from "react";
import PurchasedItem from '../PurchasedItem';

function PurchasedList() {
  const puchasedCoins = [
    { id: 79797, coin: "Bitcoin", img: "🍎", cost: 56 },
    { id: 23357, coin: "Ethereum", img: "🥝", cost: 36 },
    { id: 65497, coin: "Solana", img: "🌸", cost: 67 },
    { id: 12497, coin: "Cardano", img: "🥝", cost: 16 },
    { id: 98697, coin: "Avalanche", img: "🍒", cost: 96 },
  ];

  return (
    <ul>
      {puchasedCoins.map((item) => (
        <PurchasedItem
        key={item.id}
          id={item.id}
          coin={item.coin}
          // img={item.img}
          cost={item.cost}
        />
      ))}
    </ul>
  );
}

export default PurchasedList;
