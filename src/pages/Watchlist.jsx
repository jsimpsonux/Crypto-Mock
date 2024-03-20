import React from 'react';
import { Typography } from '@mui/material';
import RenderItems from '../components/WatchList/RenderItems';

const Watchlist = () => {
  return (
    <Typography variant="h6" component="div">
      <RenderItems />
    </Typography>
  );
};

export default Watchlist;
