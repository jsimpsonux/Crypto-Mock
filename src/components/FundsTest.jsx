import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
//import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from "@mui/icons-material/Add";
import Icon from "@mui/material/Icon";
import { v4 as uuidv4 } from "uuid";

function FundsTest(props) {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), invested: 0, paid: 0 },
  ]);

  const [addFunds, setAddFunds] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  // const [totalInvestments, setTotalInvestments] = useState(0);
  const [equality, setEquality] = useState(true);

  let newTotal = 0;

  const handleSubmit = (event) => {
    if (totalBalance !== paidBill) {
      setEquality(false);
      return;
    }
    event.preventDefault();
    props.history.push(inputFields);
    console.log("InputFields", inputFields);
  };
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      newTotal += Number(i.paid);
      setAddFunds(newTotal);

      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), paid: "" },
    ]);
  };


  return (
    <Container>
      {/* <h4>Total:</h4> */}
      <TextField
        type="number"
        name="totalBalance"
        label="Balance"
        variant="filled"
        value={totalBalance}
        onChange={(event) => setTotalBalance(event.target.value)}
      />
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
          
            <TextField
              type="number"
              name="paid"
              label="Paid"
              variant="filled"
              value={inputField.paid}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <IconButton onClick={handleAddFields}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <h3>Add: {addFunds}</h3>
        {!equality ? <h6>Total Balance and Funds doesn't match</h6> : null}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Add Funds
        </Button>
      </form>
    </Container>
  );
}

export default FundsTest;
