// import Button from "@mui/material/Button"
import React from 'react';
import { useSelector } from 'react-redux';
import { tokens } from "../../theme";
import { useTheme, Box, Typography } from "@mui/material";
import Header from "../../components/header";

const coinList = [
    { name: 'Bitcoin' },
    { name: 'Ethereum' },
    { name: 'Ripple' },
    { name: 'Litecoin' },
    { name: 'Stellar' },
    { name: 'Cardano' },
  ];


const DashBoard = () => {
     const theme = useTheme()
     const colors = tokens(theme.palette.mode)

     const coinBalances = useSelector((state) => state.data.allCoinBalance);
     const CoinHoldings = coinList.filter((coin) => coinBalances[coin.name] > 0);
    

    //  const handleSaveNumber = () => {
    //    const randomNumber = Math.floor(Math.random() * 100);
    //    dispatch(saveBalance(randomNumber));
    //   };

    return ( 
        <Box  padding={"0 2% 0 2%"}>
            <Box margin={"0  0 3% 0"}>
            <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }} >Hello, #username!</Typography>
            <Typography fontSize={"12px"} color={colors.grey[200]} >Check the latest stats of your wallet Overview</Typography>
            </Box>
        
        <Box display={"flex"} flexDirection={"row"} > 
            <Box padding={"8px"} backgroundColor={colors.primary[400]} borderRadius={"10px"}
            >
                <Header text={"Coin holding Balance" } />
                {/* <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> uuuuuuuuumml </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }} > Etherum : {balance} </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }} > USDT : 23{balance} </Typography> */}
                {/* <Button variant="contained" color="primary" onClick={handleSaveNumber}>Saved Balance</Button> */}
                <div>

<h1>Coin Balances</h1>
{CoinHoldings.map((coin) => (
  <div key={coin.name}>
    <p>{coin.name}: {coinBalances[coin.name]}</p>
  </div>
))}
</div>
            </Box>

            <Box margin={"0 0 0 2%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} flexBasis={"40%"}>
                <Box  borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]}>
                <Header text={"Coin holding MarketCap"} />
                    <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> BitCoin :  </Typography>
                    <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> Etherum :  </Typography>
                </Box>
            </Box>

            <Box margin={"0 0 0 2%"} borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]}>
            <Header text={"Portfolio Net Value"} />
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> BitCoin :</Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> Etherum : </Typography>
                <Box display={"flex"}>
                    <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> Total Value : </Typography> 
                 <Typography variant="h5" color={"green"} fontSize={"25px"} marginLeft={"5px"} >  $
                 </Typography>
                 </Box>
            </Box>
            </Box>
          
         <Box margin={"2% 0 2% 0"}>
        
        <Box display={"flex"} flexDirection={"row"} >

            <Box padding={"8px"} backgroundColor={colors.primary[400]} borderRadius={"10px"} >
                <Header text={"Portfolio pie chart stat"} />
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> BitCoin :</Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> Etherum :</Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> USDT :  </Typography>      
            </Box>

            <Box margin={"0 0 0 2%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} flexBasis={"40%"}>

                <Box borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]}>
                <Header text={"Coin holding trends"} />
                    <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> Table eow 1 BitCoin : </Typography>
                    <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> Table row 2 Etherum :  </Typography>
                </Box>
            </Box>

            <Box margin={"0 0 0 2%"} borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]}>
            <Header text={"Recent Transactions"} />
             <Box backgroundColor={colors.primary[600]} borderRadius={"6px"} padding={"3px"} sx={{ m: "0 0 3px 0" }}>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> Sent to #address </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> -0.02 BTC </Typography>
            </Box>

            <Box backgroundColor={colors.primary[500]} borderRadius={"6px"} padding={"3px"}  >
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}>Recieve from #address </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} fontSize={"25px"} sx={{ m: "0 0 1px 0" }}> +25 ETH </Typography>
             </Box>
            </Box>
           </Box>
          </Box>
         </Box>
    )
}

export default DashBoard;
       