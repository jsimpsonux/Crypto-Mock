import React, {useState} from "react"
import Alert from '@mui/material/Alert';



function TotalInvested() {

  // const totalInvestments = investments.reduce((total, item) => {
  //   return (total +=payments);
  // }, 0);

  return (
    <div>
      <h3>Total invested</h3>
      <Alert variant="filled" severity='info'>
      {/* £{totalInvestments} */}
      675
      </Alert>
    </div>
  )
}

export default TotalInvested