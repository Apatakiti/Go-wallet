import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import { tokens } from "../../theme";
import { useTheme, Box, Typography, Grid, IconButton, Button, TextField, } from "@mui/material";
import { updateBalance } from '../../Redux/slice';
import Header from "../../components/header";


const Send = () => {

    const coinList = [
    { name: 'Bitcoin' },
    { name: 'Ethereum' },
    { name: 'Ripple' },
    { name: 'Litecoin' },
    { name: 'Stellar' },
    { name: 'Cardano' },
  ];
  
  
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  
    // SEND  SD
    const [selectedCoinSD, setSelectedCoinSD] = useState(null);
    const [walletAddressSD, setWalletAddressSD] = useState(null);
    const [searchValueSD, setSearchValueSD] = useState('');
  
    const handleCoinClickSD = (coin) => {
      setSelectedCoinSD(coin.name);
    };
  
    const generateAddressSD = (coin) => {
      generateWalletAddressSD(coin.name);
    };
  
    const generateWalletAddressSD = () => {
      const randomAddressSD = Math.random().toString(36).substring(2, 15);
      setWalletAddressSD(randomAddressSD);
    };
  
    const filteredCoinsSD = coinList.filter((coin) =>
      coin.name.toLowerCase().includes(searchValueSD.toLowerCase())
    );
  
    const textAreaRefSD = useRef(null);
    const [copiedSD, setCopiedSD] = useState('');
    const copyToClipboardSD = () => {
      if (textAreaRefSD.current) {
        textAreaRefSD.current.select();
        document.execCommand('copy');
      }
      setCopiedSD('copied')
    };
  
    // Send Form
    const [AddressError, setAddressError] = useState(false);
    const [AmountError, setAmountError] = useState(false);
    const [SendDetails, SendDetailsData] = useState({ coinAddress: '', Amount: '' });
    const [transactionHistory, setTransactionHistory] = useState([]);
  
    const handleSendDetails = (e) => {
      const { name, value } = e.target;
      SendDetailsData({ ...SendDetails, [name]: value });
    };
    const dispatch = useDispatch

    const handleDecreaseBalance = (coinName, amount) => {
        dispatch(updateBalance({ coinName, amount: -amount }));
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      const isRangeValid = /^[a-zA-Z0-9]{11}$/.test(SendDetails.coinAddress);
      const isFloatValid = parseFloat(SendDetails.Amount) > 0;
  
      if (isRangeValid && isFloatValid) {
        handleDecreaseBalance(selectedCoinSD, parseFloat(SendDetails.Amount))
       
        const currentTransaction = {
          coinAddress: SendDetails.coinAddress,
          Amount: parseFloat(SendDetails.Amount),
          submissionTime: new Date()
        };
  
        setTransactionHistory([...transactionHistory, currentTransaction]);
        SendDetailsData({ coinAddress: '', Amount: '' });
  
        setAddressError(false);
        setAmountError(false);
  
      } else {
        setAddressError(!isRangeValid);
        setAmountError(!isFloatValid);
      }
    };
  
    return (
      <Grid item style={{ width: '250px', height: '50%' }} margin={"0 0 0 2%"} borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]}>
        <Header text={"Send Coin"} />
  
        <Box>
          <Box marginBottom={'5px'}>
            <input type="text" placeholder="Search for sending coin"
              value={searchValueSD} onChange={(e) => setSearchValueSD(e.target.value)} />
          </Box>
          <Box>
            <div style={{ width: '150px', maxHeight: '121px', overflowY: 'scroll', scrollbarWidth: 'thin' }} >
              <ul >
                {filteredCoinsSD.map((coin, index) => (
                  <li style={{ margin: '6px', cursor: 'pointer', backgroundColor: colors.grey[600], listStyle: 'none' }} key={index} onClick={() => handleCoinClickSD(coin)}>
                    {coin.name}
                  </li>
                ))}
              </ul>
            </div>
            <Box>
              {selectedCoinSD ? (<p> Coin selected : {selectedCoinSD}</p>) : (undefined)}
              <Box>
  
                <div>
  
                  {walletAddressSD ?
                    <Box justifyItems={'spaceBetween'} marginBottom={'11px'} display={'flex'} flexDirection={'row'}>
                      <IconButton onClick={copyToClipboardSD}><CopyAllOutlinedIcon /></IconButton>
                      <div style={{ width: '100px', height: '25px', backgroundColor: 'white', color: colors.grey[800] }}>
                        {walletAddressSD}
                      </div>
                      {copiedSD ? (<p>{copiedSD}</p>) : (undefined)}
                    </Box> : (undefined)}
  
                  <div>
                    <textarea
                      ref={textAreaRefSD}
                      value={walletAddressSD}
                      style={{ position: 'absolute', left: '-9999px' }}
                      readOnly
                    />
                  </div>
  
                  <Box marginBottom={'8px'}>
                    {selectedCoinSD ? (
                      <Button variant="contained" color="primary"
                        onClick={() => generateAddressSD(selectedCoinSD)}><p>generate {selectedCoinSD} Address</p></Button>
                    ) : (
                      <p>Select a coin to get your Coin Address...</p>
                    )}
                  </Box>
  
                  <Box>
                    {/* <Box>
                          {you ? (
                            <p>generate Address</p>
                          ) : ( <p>Select a coin to get your Coin Address...</p>)}
                          </Box> */}
                    <form onSubmit={handleFormSubmit}>
                      <TextField
                        label="Enter Coin Address"
                        variant="outlined"
                        name="coinAddress"
                        value={SendDetails.coinAddress}
                        onChange={handleSendDetails}
                        error={AddressError}
                        helperText={AddressError ? 'Enter your reciever 11 digit coin Address' : ''}
                      />
                      <br />
                      <br />
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
                      <br />
                      <br />
                      <Button variant="contained" color="primary" type="submit">
                        Send
                      </Button>
                    </form>
                  </Box>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    )
  }
  

  export default Send;