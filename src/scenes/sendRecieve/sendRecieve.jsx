import React, { useState, useRef } from 'react';
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import { tokens } from "../../theme";
import { useTheme, Box, Typography, Grid, IconButton, Button, } from "@mui/material";
import Header from "../../components/header";




const SendRecieve = () => {
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

  const textToCopy = "";
  const textAreaRef = useRef(null);
  const [copied, setCopied] = useState('');
  const copyToClipboard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
    }
    setCopied('copied')
  };

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

  const textToCopySD = "";
  const textAreaRefSD = useRef(null);
  const [copiedSD, setCopiedSD] = useState('');
  const copyToClipboardSD = () => {
    if (textAreaRefSD.current) {
      textAreaRefSD.current.select();
      document.execCommand('copy');
    }
    setCopiedSD('copied')
  };

  return (
    <Box padding={"0 2% 0 2%"}>
      <Box margin={"0  0 4% 0"}>
        <Typography variant="h3" color={colors.grey[100]} >Recieve & Send Coins</Typography>
      </Box>

      <Box margin={"4% 0 2% 0"}>
        <Grid margin={"1% 2% 2% 0"} xs={12} container spacing={3}>
          <Grid item style={{ width: '250px', height: '50%' }} padding={"8px"} marginBottom={"12px"} backgroundColor={colors.primary[400]} borderRadius={"10px"} >
            <Header text={"Recieve Coin"} />
            <Box>
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
                          value={textToCopy}
                          style={{ position: 'absolute', left: '-9999px' }}
                          readOnly
                        />
                      </div>

                      <Box>
                        {selectedCoin ? (
                          <Button variant="contained" color="primary"
                            onClick={() => generateAddress(selectedCoin)}><p>generate {selectedCoin} Address</p></Button>
                        ) : (
                          <p>Select a coin to get an Address...</p>
                        )}
                      </Box>

                    </div>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item style={{ width: '250px', height: '50%' }} margin={"0 0 0 2%"} borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]} marginBottom={"12px"}>
            <Header text={"Coin holding Balance"} />
          </Grid>

          <Grid item style={{ width: '250px', height: '250px' }} margin={"0 0 0 2%"} borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]}>
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
                      <li style={{ margin: '6px', cursor: 'pointer', backgroundColor: colors.grey[400], listStyle: 'none' }} key={index} onClick={() => handleCoinClickSD(coin)}>
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
                          <div style={{ width: '100px', height: '25px', backgroundColor: 'white', color: colors.grey[800] }}>  {walletAddressSD} </div>
                          {copiedSD ? (<p>{copiedSD}</p>) : (undefined)}
                        </Box> : (undefined)}

                      <div>
                        <textarea
                          ref={textAreaRefSD}
                          value={textToCopySD}
                          style={{ position: 'absolute', left: '-9999px' }}
                          readOnly
                        />
                      </div>

                      <Box>
                        {selectedCoinSD ? (
                          <Button variant="contained" color="primary"
                            onClick={() => generateAddressSD(selectedCoinSD)}><p>generate {selectedCoinSD} Address</p></Button>
                        ) : (
                          <p>Select a coin to get an Address...</p>
                        )}
                      </Box>

                    </div>
                  </Box>
                </Box>

              </Box>
            </Box>

          </Grid>
        </Grid>
      </Box>
    </Box>

  )
}

export default SendRecieve;
