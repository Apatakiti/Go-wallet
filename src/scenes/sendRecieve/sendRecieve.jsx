import React, { useState, useRef } from 'react';
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import { tokens } from "../../theme";
import { useTheme, Box, Typography, Grid, IconButton, Button, TextField, } from "@mui/material";
import Header from "../../components/header";

const coinList = [
  { name: 'Bitcoin' },
  { name: 'Ethereum' },
  { name: 'Ripple' },
  { name: 'Litecoin' },
  { name: 'Stellar' },
  { name: 'Cardano' },
];

const Recieve = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  //  RECIEVE
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleCoinClick = (coin) => {
    setSelectedCoin(coin.name);
  };
  const generateAddress = (coin) => {
    generateWalletAddress(coin.name);
  };

  const generateWalletAddress = () => {
    const randomAddress = Math.random().toString(36).substring(2, 15);
    setWalletAddress(randomAddress);
  };

  const filteredCoins = coinList.filter((coin) =>
    coin.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const textAreaRef = useRef(null);
  const [copied, setCopied] = useState('');
  const copyToClipboard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
    }
    setCopied('copied')
  };

  const [rangeError, setRangeError] = useState(false);
  const [floatError, setFloatError] = useState(false);
  const [FormCheckSelectedCoin, setFormCheckSelectedCoin] = useState(false);
  const [SendDetails, SendDetailsData] = useState({ rangeValue: '', floatValue: '' });
  const [transactionHistory, setTransactionHistory] = useState([]);

  const handleSendDetails = (e) => {
    const { name, value } = e.target;
    SendDetailsData({ ...SendDetails, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isRangeValid = /^[a-zA-Z0-9]{11}$/.test(SendDetails.rangeValue);
    const isFloatValid = parseFloat(SendDetails.floatValue) > 0;

    if (isRangeValid && isFloatValid && selectedCoin) {
      const currentTransaction = {
        rangeValue: SendDetails.rangeValue,
        floatValue: parseFloat(SendDetails.floatValue),
        submissionTime: new Date()
      };

      setTransactionHistory([...transactionHistory, currentTransaction]);
      SendDetailsData({ rangeValue: '', floatValue: '' });

      setRangeError(false);
      setFloatError(false);

    } else {
      setRangeError(!isRangeValid);
      setFloatError(!isFloatValid);
      setFormCheckSelectedCoin(true)
    }
  };

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

                    {FormCheckSelectedCoin ? (
                      <p style={{ color: 'red' }}>kindly select a coin!</p>
                    ) : (undefined)}

                    <TextField
                      label="Enter Coin Address"
                      variant="outlined"
                      name="rangeValue"
                      value={SendDetails.rangeValue}
                      onChange={handleSendDetails}
                      error={rangeError}
                      helperText={rangeError ? 'Enter your reciever 11 digit coin Address' : ''}
                    />
                    <br />
                    <br />
                    <TextField
                      label="Amount"
                      variant="outlined"
                      type="number"
                      name="floatValue"
                      value={SendDetails.floatValue}
                      onChange={handleSendDetails}
                      error={floatError}
                      helperText={floatError ? 'Enter a valid amount' : ''}
                    />
                    <br />
                    <br />
                    <Button variant="contained" color="primary" type="submit">
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

const Send = () => {

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
  const [rangeError, setRangeError] = useState(false);
  const [floatError, setFloatError] = useState(false);
  const [SendDetails, SendDetailsData] = useState({ rangeValue: '', floatValue: '' });
  const [transactionHistory, setTransactionHistory] = useState([]);

  const handleSendDetails = (e) => {
    const { name, value } = e.target;
    SendDetailsData({ ...SendDetails, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isRangeValid = /^[a-zA-Z0-9]{11}$/.test(SendDetails.rangeValue);
    const isFloatValid = parseFloat(SendDetails.floatValue) > 0;

    if (isRangeValid && isFloatValid) {
      const currentTransaction = {
        rangeValue: SendDetails.rangeValue,
        floatValue: parseFloat(SendDetails.floatValue),
        submissionTime: new Date()
      };

      setTransactionHistory([...transactionHistory, currentTransaction]);
      SendDetailsData({ rangeValue: '', floatValue: '' });

      setRangeError(false);
      setFloatError(false);

    } else {
      setRangeError(!isRangeValid);
      setFloatError(!isFloatValid);
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
                      name="rangeValue"
                      value={SendDetails.rangeValue}
                      onChange={handleSendDetails}
                      error={rangeError}
                      helperText={rangeError ? 'Enter your reciever 11 digit coin Address' : ''}
                    />
                    <br />
                    <br />
                    <TextField
                      label="Amount"
                      variant="outlined"
                      type="number"
                      name="floatValue"
                      value={SendDetails.floatValue}
                      onChange={handleSendDetails}
                      error={floatError}
                      helperText={floatError ? 'Enter a valid amount' : ''}
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

const SendRecieve = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

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
          </Grid>

          {/* Send */}
          <Send />

        </Grid>
      </Box>
    </Box>

  )
}

export default SendRecieve;
