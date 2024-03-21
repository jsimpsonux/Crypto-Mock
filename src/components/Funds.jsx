import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Icon from "@mui/material/Icon";
import { v4 as uuidv4 } from "uuid";

function Funds(props) {
  const [inputFields, setInputFields] = useState([{ id: uuidv4(), paid: 0 }
  ]);

  const [addFunds, setAddFunds] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

// Load inputFields data from local storage on component mount
useEffect(() => {
  const storedInputFields = JSON.parse(localStorage.getItem('inputFields'));
  if (storedInputFields) {
    setInputFields(storedInputFields);
  }
}, []);

// Save inputFields data to local storage whenever it changes
useEffect(() => {
  localStorage.setItem('inputFields', JSON.stringify(inputFields));
}, [inputFields]);

// Handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  setTotalBalance(addFunds);

  // props.history.push(inputFields);
  console.log("InputFields", inputFields);
};

// Handle change in input fields
const handleChangeInput = (id, event) => {
  const newInputFields = inputFields.map(i => {
    if (id === i.id) {
      i.paid = event.target.value;
    }
    return i;
  });

  // Calculate new total paid amount
  const newTotal = newInputFields.reduce((total, inputField) => {
    return total + Number(inputField.paid || 0);
  }, 0);

  // Update inputFields state and totalBalance state
  setInputFields(newInputFields);
  setAddFunds(newTotal);
};

return (
  <Container>
    <h4>Total:</h4>
    <TextField
      type="number"
      name="totalBalance"
      label="Total Balance"
      variant="filled"
      value={totalBalance}
      onChange={event => setTotalBalance(event.target.value)}
    />
    <br />
    <form onSubmit={handleSubmit}>
      {inputFields.map(inputField => (
        <div key={inputField.id}>
          {/* Input field for paid amount */}
          <TextField
            type="number"
            name="paid"
            label="Paid"
            variant="filled"
            value={inputField.paid}
            onChange={event => handleChangeInput(inputField.id, event)}
          />
        </div>
      ))}
      {/* Display total paid amount */}
      <h3>Add funds: {addFunds}</h3>
      <br />
      {/* Submit button */}
      <Button  
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >Pay</Button>
    </form>
  </Container>
);
}



export default Funds;
