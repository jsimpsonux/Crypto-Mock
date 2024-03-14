import React from "react";
import Box from '@mui/system/Box';
import Stack from "@mui/system/Stack";
import { styled } from '@mui/system';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
}));

function PurchasedItem(props) {
  return (
    <div>
    <Stack direction="row"
        divider={
          <Box
            component="hr"
            sx={{
              border: (theme) =>
                `1px solid ${theme.palette.mode === 'dark' ? '#262B32' : '#fff'}`,
            }}
          />
        }
        spacing={2}>
      <Item>{props.coin}</Item>
      <Item>{props.img}</Item>
      <Item>{props.cost}</Item>
    </Stack>
    </div>
  );
}

export default PurchasedItem;
