import React from 'react';
import { Typography } from '@mui/material';
import WatchList from '../components/WatchList';
import Logo from "../components/Price"

const Watchlist = () => {
  return (
    <Typography variant="h6" component="div">
      {/* <Logo name="BNB" abr="BNB" size="40px" /> */}
      <WatchList/>
    </Typography>
  );
};

export default Watchlist;
