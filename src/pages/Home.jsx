import React from 'react';
import { Typography } from '@mui/material';
import Price from "../components/Price"
import Logo from "../components/Logo"

const Home = () => {
  return (
    <Typography variant="h6" component="div">
      <div>
      <h1>this is home page</h1>
     <Price abr="XRP" />
     <Logo name="BNB" abr="BNB" size="40px"/>
     </div>
    </Typography>
  );
};

export default Home;
