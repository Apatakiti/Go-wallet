import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import { tokens } from "../../theme";
import { useTheme, Box, Grid, IconButton, Button, TextField, } from "@mui/material";
import { updateBalance } from '../../Redux/slice';
import Header from "../../components/header";

const Recieve = () => {
  const dispatch = useDispatch();

  const coinData = useSelector((state) => state.data.coinData);
  const coinList = coinData.map((crypto) => ({name: crypto.Name.name})) 

  const handleIncreaseBalance = (coinName, amount) => {
      dispatch(updateBalance({ coinName, amount }));
  };

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  // RECIEVE
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [VerifySelectCoin, setVerifySelectCoin] = useState(false);

  const handleCoinClick = (coin) => {
      setSelectedCoin(coin.name);
      setVerifySelectCoin(true)
    };

  const [walletAddress, setWalletAddress] = useState(null);
  const [searchValue, setSearchValue] = useState('');

   const generateWalletAddress = () => {
    const randomAddress = Math.random().toString(36).substring(2, 15);
    setWalletAddress(randomAddress);
  };

  const generateAddress = (coin) => {
    generateWalletAddress(coin.name);
  };

  const filteredCoins = coinList.filter((coin) =>
    coin.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Copy to clip Board
  const textAreaRef = useRef(null);
  const [copied, setCopied] = useState('');
  const copyToClipboard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
    }
    setCopied('copied')
  };

  const [AddressError, setAddressError] = useState(false);
  const [AmountError, setAmountError] = useState(false);
  const [SendDetails, SendDetailsData] = useState({ coinAddress: '', Amount: '' });
  // const [transactionHistory, setTransactionHistory] = useState([]);

  const handleSendDetails = (e) => {
    const { name, value } = e.target;
    SendDetailsData({ ...SendDetails, [name]: value });
  };

  // on form submit 
  const handleFormSubmit = (e) => {
        e.preventDefault();

        const isRangeValid = /^[a-zA-Z0-9]{11}$/.test(SendDetails.coinAddress);
        const isFloatValid = parseFloat(SendDetails.Amount) > 0;

        if (isRangeValid && isFloatValid && VerifySelectCoin) {
         handleIncreaseBalance(selectedCoin, parseFloat(SendDetails.Amount))

          const currentTransaction = {
            CoinName: selectedCoin,
            coinAddress: SendDetails.coinAddress,
            Amount: parseFloat(SendDetails.Amount),
            submissionTime: new Date()
          };

          // setTransactionHistory([...transactionHistory, currentTransaction]);
          SendDetailsData({ coinAddress: '', Amount: '' });
          console.log(currentTransaction)
          dispatch(addCurrentTransaction(currentTransaction));
          

          // console.log(transactionHistory)

          setAddressError(false);
          setAmountError(false);
          setVerifySelectCoin(false)
        } 
    else {
      setAddressError(isRangeValid);
      setAmountError(isFloatValid);
      setVerifySelectCoin(VerifySelectCoin)
    }
    }


  return (
    <Grid item style={{ width: '250px', height: '50%' }} padding={"8px"} marginBottom={"12px"} backgroundColor={colors.primary[400]} borderRadius={"10px"} >
      <Box>
        <Header text={"Recieve Coin"} />

        <Box marginBottom={'5px'}>
          <input type="text" placeholder="Search for Recieving coin"
            value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </Box>

        <Box>

          <div style={{ width: '150px', maxHeight: '121px', overflowY: 'scroll', scrollbarWidth: 'thin' }} >
            <ul >
              {filteredCoins.map((coin, index) => (
                <li style={{ margin: '6px', cursor: 'pointer', backgroundColor: colors.grey[600], listStyle: 'none' }} key={index} onClick={() => handleCoinClick(coin)}>
                  {coin.name}
                </li>
              ))}
            </ul>
          </div>

          <Box>
            {selectedCoin ? (<p> Coin selected : {selectedCoin}</p>) : (undefined)}
            <Box>

              <div>
                {walletAddress ?
                  <Box justifyItems={'spaceBetween'} marginBottom={'11px'} display={'flex'} flexDirection={'row'}>
                    <IconButton onClick={copyToClipboard}><CopyAllOutlinedIcon /></IconButton>
                    <div style={{ width: '100px', height: '20px', backgroundColor: 'white', color: colors.grey[800] }}>  {walletAddress} </div>
                    {copied ? (<p>{copied}</p>) : (undefined)}
                  </Box> : (undefined)}

                <div>
                  <textarea
                    ref={textAreaRef}
                    value={walletAddress}
                    style={{ position: 'absolute', left: '-9999px' }}
                    readOnly
                  />
                </div>

                <Box marginBottom={'8px'}>
                  {selectedCoin ? (
                    <Button variant="contained" color="primary"
                      onClick={() => generateAddress(selectedCoin)}><p>generate {selectedCoin} Address</p></Button>
                  ) : (
                    <p>Select a coin to get an Address...</p>
                  )}
                </Box>

                <Box>

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
                    <Button variant="contained" color="primary" type="submit"
                    >
                      Recieve
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

export default Recieve;