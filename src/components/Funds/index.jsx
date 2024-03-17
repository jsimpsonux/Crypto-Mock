import React, { useContext } from "react"
import { WalletPageContext } from "../WalletPageContext"

function Funds() {
  const { funds } = useContext(WalletPageContext);
  return (
    <div>
      <h3>Funds</h3>
      <p>{funds}</p>
    </div>
  )
}

export default Funds