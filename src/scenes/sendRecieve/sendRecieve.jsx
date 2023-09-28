import React, { useState, } from 'react';
import { useSelector } from 'react-redux';
import { tokens } from "../../theme";
import { useTheme, Box, Typography, Grid } from "@mui/material";
import Header from "../../components/header";
import Send from './send';
import Recieve from './Recieve';

const SendRecieve = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const allCoinBalance = useSelector((state) => state.data.allCoinBalance);

  return (
    <Box padding={"0 2% 0 2%"}>
      <Box margin={"0  0 4% 0"}>
        <Typography variant="h3" color={colors.grey[100]} >Recieve & Send Coins</Typography>
      </Box>

      <Box margin={"4% 0 2% 0"}>
        <Grid margin={"1% 2% 2% 0"} xs={12} container spacing={3}>

          {/* Recieve */}
          <Recieve />

          {/* Coin Holding Balance */}
          <Grid item style={{ width: '250px', height: '50%' }} margin={"0 0 0 2%"} borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]} marginBottom={"12px"}>
            <Header text={"Coin holding Balance"} />
            <div>
              {allCoinBalance.map((crypto) => (
                <div key={crypto.name}>
                  <p>{crypto.name}: {crypto.balance}</p>
                </div>
              ))}
            </div>
          </Grid>

          {/* Send */}
          <Send />
        </Grid>
      </Box>
    </Box>
  )
}

export default SendRecieve;
