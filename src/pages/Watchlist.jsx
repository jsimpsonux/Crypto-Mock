import React from 'react';
import { Typography } from '@mui/material';
import WatchList from '../components/WatchList/index.jsx';

const Watchlist = () => {
  return (
    <Typography variant="h6" component="div">
      <WatchList />
    </Typography>
  );
};

export default Watchlist;
