import React, {useContext} from "react"
import {WalletPageContext} from "../WalletPageContext"
import Alert from '@mui/material/Alert';


function TotalInvested() {
  const {investments, funds} = useContext(WalletPageContext);

  const totalInvestments = investments.reduce((total, item) => {
    return (total +=item.cost);
  }, 0);

  return (
    <div>
      <h3>Total invested</h3>
      <Alert variant="filled" severity='info'>
      £{totalInvestments}
      </Alert>
    </div>
  )
}

export default TotalInvested