import React from 'react';
import { useSelector } from 'react-redux';
import { tokens } from "../../theme";
import { useTheme, Box, Typography, Grid } from "@mui/material";
import Header from "../../components/header";

const Transactions = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const transactionHistory = useSelector((state) => state.data.transanctionHistory)

  return (
    <div>
        {transactionHistory.map((details, index) => (
          <div key={index}>
           {details.Amount > 0 ? 
           <div>
                <Box backgroundColor={colors.primary[500]} borderRadius={"6px"} padding={"2px"} sx={{ m: "0 0 2px 0" }}>
                    <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"}> +{Math.abs(details.Amount)}</Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"}>Recieve from &nbsp;#{details.coinAddress}</Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"}>{details.submissionTime}</Typography>
             </Box>
           </div>
           :
           <div>
                <Box backgroundColor={colors.primary[600]} borderRadius={"6px"} padding={"2px"} sx={{ m: "0 0 2px 0" }}> 
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"}> -{Math.abs(details.Amount)}&nbsp;{details.CoinName} </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"}> Sent to &nbsp;#{details.coinAddress}</Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"}>{details.submissionTime}</Typography>
            </Box>
           </div>
           }
          </div>
        ))}
      </div>
  )
}

const CoinHolding = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  
    const { allCoinBalance, loading }  = useSelector((state) => state.data);  
    const coinHolding = allCoinBalance.filter( coin => coin.balance >= 0.001 )
  
    return (
      <Box padding={"0 2% 0 2%"}>
        <Box margin={"4% 0 2% 0"}>
            <Grid  style={{ width: '250px', height: '50%' }} margin={"0 0 0 2%"} borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]} marginBottom={"12px"}>
             <div>
              {loading ? <div>Loading...</div>  :
                coinHolding.map((coin) => (
                  <Box key={coin.name}>
                      <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}>{coin.coinName} : {coin.balance} </Typography>
                  </Box>
                ))}
              </div>
            </Grid>
        </Box>
      </Box>
    )
  }
  

  

const DashBoard = () => {
     const theme = useTheme()
     const colors = tokens(theme.palette.mode)

    return ( 
        <Box  padding={"0 2% 0 2%"}>
            <Box margin={"0  0 3% 0"}>
            <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }} >Hello, #username!</Typography>
            <Typography fontSize={"12px"} color={colors.grey[200]} >Check the latest stats of your wallet Overview</Typography>
            </Box>
        
        <Box display={"flex"} flexDirection={"row"}> 
            <Box padding={"8px"} backgroundColor={colors.primary[400]} borderRadius={"10px"}>
                <Header text={"Coin holding Balance" } />
                <CoinHolding />
            </Box>

            <Box margin={"0 0 0 2%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} flexBasis={"40%"}>
                <Box  borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]}>
                <Header text={"Coin holding MarketCap"} />
                    {/* <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> BitCoin :  </Typography>
                    <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> Etherum :  </Typography> */}
                </Box>
            </Box>

            <Box margin={"0 0 0 2%"} borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]}>
            <Header text={"Portfolio Net Value"} />
                {/* <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> BitCoin :</Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> Etherum : </Typography> */}
                <Box display={"flex"}>
                    {/* <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> Total Value : </Typography> 
                 <Typography variant="h5" color={"green"} fontSize={"25px"} marginLeft={"5px"} >  $
                 </Typography> */}
                 </Box>
            </Box>
            </Box>
          
         <Box margin={"2% 0 2% 0"}>
        
        <Box display={"flex"} flexDirection={"row"} >

            <Box padding={"8px"} backgroundColor={colors.primary[400]} borderRadius={"10px"} >
                <Header text={"Portfolio pie chart stat"} />
                {/* <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> BitCoin :</Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> Etherum :</Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> USDT :  </Typography>       */}
            </Box>

            <Box margin={"0 0 0 2%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} flexBasis={"40%"}>

                <Box borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]}>
                <Header text={"Coin holding trends"} />
                    {/* <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}>  </Typography>
                    <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}>  </Typography> */}
                </Box>
            </Box>

            <Box margin={"0 0 0 2%"} borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]}>
            <Header text={"Recent Transactions"} />
             <Transactions />
            </Box>
           </Box>
          </Box>
         </Box>
    )
}

export default DashBoard;
       