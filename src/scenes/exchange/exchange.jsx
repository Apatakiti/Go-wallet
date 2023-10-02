import Button from "@mui/material/Button"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tokens } from "../../theme";
import { useTheme, Box, Grid, TextField, Typography } from "@mui/material";
import { updateBalance }  from '../../Redux/slice';
import Header from "../../components/header"
// import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";

const From = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const coinData = useSelector((state) => state.data.coinData);
  const coinList = coinData.map((crypto) => ({name: crypto.Name.name})) 

//const dispatch = useDispatch()
//dispatch(updateBalance({ coinName, amount: -amount }));
  
  const [selectedCoinSD, setSelectedCoinSD] = useState(null);  
  const [searchValueSD, setSearchValueSD] = useState('');
  const [VerifySelectCoin, setVerifySelectCoin] = useState(false);

  const handleCoinClickSD = (coin) => {
    setSelectedCoinSD(coin.name);
    setVerifySelectCoin(true)
  };
  
  const filteredCoinsSD = coinList.filter((coin) =>
    coin.name.toLowerCase().includes(searchValueSD.toLowerCase())
  );
  
    const [AmountError, setAmountError] = useState(false);
    const [SendDetails, SendDetailsData] = useState({ Amount: '' });
  
    const handleSendDetails = (e) => {
      const { name, value } = e.target;
      SendDetailsData({ ...SendDetails, [name]: value });
    };
    
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      const isRangeValid = /^[a-zA-Z0-9]{11}$/.test(SendDetails.coinAddress);
      const isFloatValid = parseFloat(SendDetails.Amount) > 0;
  
      if (isRangeValid && isFloatValid && VerifySelectCoin) {
        SendDetailsData({ coinAddress: '', Amount: '' });
        setAmountError(false);
        setVerifySelectCoin(false)
      } else {
        setAmountError(!isFloatValid);
        setVerifySelectCoin(true)
      }
    };
  
    return (
      <Grid style={{ width: '250px', height: '50%' }} 
      margin={"0 0 2% 0"} 
      borderRadius={"10px"} 
      padding={"8px"} 
      backgroundColor={colors.primary[400]}>
        <Header text={"From"} />
        {selectedCoinSD ? (
            <Typography variant="h1"
                      color={colors.grey[100]} 
                      marginBottom={"5px"} 
                      fontSize={"15px"}> exchange from &nbsp;
                        {selectedCoinSD} 
                      </Typography>
        ) : (undefined)}
        <Box>
          <Box marginBottom={'1px'}>
            <input 
              type="text" placeholder="Search for sending coin"
              value={searchValueSD} 
              onChange={(e) => setSearchValueSD(e.target.value)} />
          </Box>
          <Box>
            <div style={{ 
                          width: '150px', 
                          maxHeight: '121px', 
                          overflowY: 'scroll', 
                          scrollbarWidth: 'thin' 
                        }} >
              <ul>
                {filteredCoinsSD.map((coin, index) => (
                  <li style={{ margin: '6px', cursor: 'pointer', backgroundColor: colors.grey[600], listStyle: 'none' }} key={index} onClick={() => handleCoinClickSD(coin)}>
                    {coin.name}
                  </li>
                ))}
              </ul>
            </div>
        
            <Box>
              {selectedCoinSD ? (<p> from {selectedCoinSD}</p>) : (undefined)}

                  <Box>   
                    <form onSubmit={handleFormSubmit}>
                    {!VerifySelectCoin ? (
                      <p  style={{ color: 'red'}}>select coin to Exchange From!</p>
                    ) : (undefined)}
                    
                      <TextField
                        label="Amount"
                        variant="outlined"
                        type="number"
                        name="Amount"
                        value={SendDetails.Amount}
                        onChange={handleSendDetails}
                        error={AmountError}
                        helperText={AmountError ? 'Enter a valid amount' : ''}
                      />
                    </form>
                </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    )
  }




































  const To = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  
    const coinData = useSelector((state) => state.data.coinData);
    const coinList = coinData.map((crypto) => ({name: crypto.Name.name})) 
  
  //const dispatch = useDispatch()
  //dispatch(updateBalance({ coinName, amount: -amount }));
    
    const [selectedCoinSD, setSelectedCoinSD] = useState(null);  
    const [searchValueSD, setSearchValueSD] = useState('');
    const [VerifySelectCoin, setVerifySelectCoin] = useState(false);
  
    const handleCoinClickSD = (coin) => {
      setSelectedCoinSD(coin.name);
      setVerifySelectCoin(true)
    };
    
    const filteredCoinsSD = coinList.filter((coin) =>
      coin.name.toLowerCase().includes(searchValueSD.toLowerCase())
    );
    
      const [AmountError, setAmountError] = useState(false);
      const [SendDetails, SendDetailsData] = useState({ Amount: '' });
    
      const handleSendDetails = (e) => {
        const { name, value } = e.target;
        SendDetailsData({ ...SendDetails, [name]: value });
      };
      
      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        const isRangeValid = /^[a-zA-Z0-9]{11}$/.test(SendDetails.coinAddress);
        const isFloatValid = parseFloat(SendDetails.Amount) > 0;
    
        if (isRangeValid && isFloatValid && VerifySelectCoin) {
          SendDetailsData({ coinAddress: '', Amount: '' });
          setAmountError(false);
          setVerifySelectCoin(false)
        } else {
          setAmountError(!isFloatValid);
          setVerifySelectCoin(true)
        }
      };
    
      return (
        <Grid style={{ width: '250px', height: '50%' }} 
        margin={"0 0 0 2%"} 
        borderRadius={"10px"} 
        padding={"8px"} 
        backgroundColor={colors.primary[400]}>
          <Header text={" to"} />

          {selectedCoinSD ? (
          <Typography variant="h3"
                      color={colors.grey[100]} 
                      marginBottom={"5px"} 
                      fontSize={"15px"}>exchange to
                     &nbsp;{selectedCoinSD} 
                      </Typography>) : (undefined)}
          <Box>
            <Box marginBottom={'1px'}>
              <input 
                type="text" placeholder="Search for sending coin"
                value={searchValueSD} 
                onChange={(e) => setSearchValueSD(e.target.value)} />
            </Box>
            <Box>
              <div style={{ 
                            width: '150px', 
                            maxHeight: '121px', 
                            overflowY: 'scroll', 
                            scrollbarWidth: 'thin' 
                          }} >
                <ul>
                  {filteredCoinsSD.map((coin, index) => (
                    <li style={{ margin: '6px', cursor: 'pointer', backgroundColor: colors.grey[600], listStyle: 'none' }} key={index} onClick={() => handleCoinClickSD(coin)}>
                      {coin.name}
                    </li>
                  ))}
                </ul>
              </div>
          
              <Box>
                {selectedCoinSD ? (<p> from {selectedCoinSD}</p>) : (undefined)}
                
                    <Box>   
                      <form onSubmit={handleFormSubmit}>
                      {!VerifySelectCoin ? (
                        <p  style={{ color: 'red'}}>select a coin Exchanging to!</p>
                      ) : (undefined)}

                        <TextField
                          label="Amount"
                          variant="outlined"
                          type="number"
                          name="Amount"
                          value={SendDetails.Amount}
                          onChange={handleSendDetails}
                          error={AmountError}
                          helperText={AmountError ? 'Enter a valid amount' : ''}
                        />
                      </form>
                  </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      )
    }
  
  


const Exchange = () => { 
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const { allCoinBalance, loading }  = useSelector((state) => state.data);  
    const coinHolding = allCoinBalance.filter( coin => coin.balance > 5 )

    return (
        <div>
            <Typography textAlign={'center'} variant="h1"  color="secondary">
              Exchange
            </Typography> 
           
            <Box margin={"4% 0 2% 2%"}  >
            <Grid margin={"1% 2% 2% 0"} xs={12} container spacing={3}>

           {/* Form */}
           <From />
           
          {/* Coin Holding Balance */}
          <Grid item style={{ width: '250px', height: '50%' }} margin={"0 0 0 2%"} borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]} marginBottom={"12px"}>
            <Header text={"Coin holding Balance"} />
           <div><Box marginBottom={'81px'}>
            {loading ? <Box marginBottom={'311px'}>Loading...</Box>  :
              coinHolding.map((coin) => (
                  
                   <Box key={coin.name} >
                    <p>{coin.coinName}: {coin.balance}</p>
                  </Box>
                 ))}
              </Box>
            </div>

            <Button variant="contained" color="secondary">Exchange</Button>
          </Grid>

          {/* To */}
          <To />
        </Grid>
       </Box>
      </div>
    )
}

export default Exchange;