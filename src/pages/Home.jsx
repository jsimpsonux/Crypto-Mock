import React from 'react';
import { Typography } from '@mui/material';
import Price from "../components/Price"
import Logo from "../components/Logo"
import crypto from "../data/crypto.json"
import Card from "../components/Card/index.jsx"

const Home = () => {
  return (
    <Typography variant="h6" component="div">
      <div>
      <h1>this is home page</h1>
     <Price abr="XRP" />
     <Logo name="BNB" abr="BNB" size="40px"/>
     {/* <h4>
        {crypto.map((element) => (
          <Logo
            name={element.name}
            abr={element.abbreviation}
            size="40px"
            key={element.id}
          />
        ))}
      </h4> */}

      <Card />
     </div>
    </Typography>
  );
};
export default Home;
