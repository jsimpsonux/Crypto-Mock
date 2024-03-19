import React from "react";
import "./style.css";
import { Box, Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import Funds from "../Funds";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { palette } from "@mui/system";
import cryptoData from "../../data/crypto.json";
import { Typography } from "@mui/material";

import PurchaseList from "../PurchasedList";
import Remaining from "../Remaining";
import TotalInvested from "../TotalInvested";
import { WalletPageProvider } from "../WalletPageContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const WalletPage = () => {
  return (
    <WalletPageProvider>
      <Container maxWidth="sm">
        {/* <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
          Wallet
        </Typography> */}

        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
            <Item>
              <Funds />
            </Item>
          </Box>
          <Box gridColumn="span 6">
            <Item>
              <Remaining />
            </Item>
          </Box>
          <Box gridColumn="span 6">
            <Item>
              <TotalInvested />
            </Item>
          </Box>
        </Box>

        <Typography variant="h5" marginTop={5} marginBottom={3}>
           History
        </Typography>
        <Box>
          <Box>
            <PurchaseList />
          </Box>
        </Box>
      </Container>
    </WalletPageProvider>
  );
};

export default WalletPage;

// {cryptoData.map((crypto, index) => (
//   <>
//    <Typography
//    variant="h4"
//    component="h2"
//    marginTop={5}
//    marginBottom={3}
//    >
//      Coin: {crypto.name}
//    </Typography>
//    <Grid container spacing={1}>
//      {cryptoData.map((crypto, index) =>   <BoxItem crypto={crypto} key={index}/>)}

//    <div>
//      {/* <PurchaseList /> */}
//    </div>

//    {/* <h3>Purchase History</h3> */}
//    {/* <div>
//    // <PurchaseList />
//  </div> */}
//  </Grid>
//  </>
//  ))}
