import React from "react";
// import Alert from '@mui/material/Alert';

function Remaining() {
  // const totalInvestments = investments.reduce((total, item) => {
  //   return (total = total + item.cost)
  // }, 0)

  // const alertType = totalInvestments > funds ? 'warning' : 'info'

  return (
    <div>
      <h3>Remaining</h3>
      {/* <Alert variant="filled" severity={alertType}>
        Remaining funds: 2400£
      </Alert> */}
      <p>2400£</p>
      {/* <p>{funds - totalInvestments}</p> */}
    </div>
  );
}

export default Remaining;
