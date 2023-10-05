import Button from "@mui/material/Button";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tokens } from "../../theme";
import { useTheme, Box, Grid, TextField, Typography } from "@mui/material";
import { updateExchangeFromBalance,  updateExchangeToBalance } from "../../Redux/slice";
import Header from "../../components/header";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";

const Exchange = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
const dispatch = useDispatch()
    // Balance
    const { allCoinBalance, loading } = useSelector((state) => state.data);
    const coinHolding = allCoinBalance.filter(coin => coin.balance >= 0.001)

    // From
    const [VerifySelectCoin, setVerifySelectCoin] = useState(false);
    const [searchValueSD, setSearchValueSD] = useState('');
    const [selectedCoinFrom, setSelectedCoinFrom] = useState(null);

    const exchangeableCoin = coinHolding.filter((coin) =>
        coin.coinName.toLowerCase().includes(searchValueSD.toLowerCase())
    );

    const [fromCoinPrice, setExchangeFromPrice] = useState(null);

    const handleCoinClickSD = (coin) => {
        setSelectedCoinFrom(coin);
        setVerifySelectCoin(true)
    };

    useEffect(() => {
        const wsUrl = 'wss://stream.binance.com:9443/ws/btcusdt@trade';
        const ws = new WebSocket(wsUrl);
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setExchangeFromPrice(data.p)
        };
    }, []);

    // To
    const [selectedCoinTo, setSelectedCoinTo] = useState(null);
    const [searchValueTo, setSearchValueTo] = useState('');
    const [VerifySelectCoinTo, setVerifySelectCoinTo] = useState(false);

    const handleCoinClickTo = (coin) => {
        setSelectedCoinTo(coin);
        setVerifySelectCoinTo(true)
    };

    const coinData = useSelector((state) => state.data.coinData);
    const coinList = coinData.map((crypto) => ({ name: crypto.Name.name }))

    const filteredCo = coinList.filter((coin) =>
        coin.name.toLowerCase().includes(searchValueTo.toLowerCase())
    );

    const [ToCoinPrice, setExchangeToPrice] = useState(null);

    useEffect(() => {
        const wsUrl = 'wss://stream.binance.com:9443/ws/btcusdt@trade';
        const ws = new WebSocket(wsUrl);
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setExchangeToPrice(data.p)
        };
    }, []);
    
    // Exchange
    const [AmountError, setAmountError] = useState(false);
    const [NumOfCoin, changefromAmount] = useState({ amountChangingFrom: '' });

    const handleSendDetails = (e) => {
        const { name, value } = e.target;
        changefromAmount({ [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const isFloatValid = parseFloat(NumOfCoin.amountChangingFrom) > 0;

        if (isFloatValid && VerifySelectCoinTo && VerifySelectCoin) {

            changefromAmount({ amountChangingFrom: '' });
            setAmountError(false);

            const ExchangedToCoinAmount = ((parseFloat(NumOfCoin.amountChangingFrom) * fromCoinPrice) / ToCoinPrice)

            // Add to exchange To coin 
            dispatch(updateExchangeToBalance({ selectedCoinTo, amount: ExchangedToCoinAmount}));
            
            // Subtract from exchange from coin
            dispatch(updateExchangeFromBalance({ selectedCoinFrom, amount: -parseFloat(NumOfCoin.amountChangingFrom)}));

        } else {
            setAmountError(!isFloatValid);
        }
    };

    return (
        <div>
            <Typography textAlign={'center'} variant="h1" color="secondary">
                Exchange
            </Typography>

            <Box margin={"4% 0 2% 2%"}  >
                <Grid margin={"1% 2% 2% 0"} xs={12} container spacing={3}>

                    {/* From */}
                    <Grid style={{ width: '250px', height: '50%' }}
                        margin={"0 0 0 2%"}
                        borderRadius={"10px"}
                        padding={"8px"}
                        backgroundColor={colors.primary[400]}>
                        <Header text={" From"} />

                        {selectedCoinFrom ? (
                            <Typography variant="h3"
                                color={colors.grey[100]}
                                marginBottom={"5px"}
                                fontSize={"15px"}>exchange from
                                &nbsp;{selectedCoinFrom}
                            </Typography>) : (undefined)}
                        <Box>
                            <Box marginBottom={'1px'}>
                                <input
                                    type="text" placeholder="Search coin exchanging from"
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
                                        {exchangeableCoin.map((coin, index) => (
                                            <li style={{
                                                margin: '6px',
                                                cursor: 'pointer',
                                                backgroundColor: colors.grey[600],
                                                listStyle: 'none'
                                            }}
                                                key={index} onClick={() => handleCoinClickSD(coin.coinName)}>  {coin.coinName}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </Box>
                        </Box>
                    </Grid>

                    {/* Coin Holding Balance */}
                    <Grid item style={{ width: '250px', height: '50%' }} margin={"0 0 0 2%"} borderRadius={"10px"} padding={"8px"} backgroundColor={colors.primary[400]} marginBottom={"12px"}>
                        <Header text={"Coin holding Balance"} />

                        <div>
                            <Box marginBottom={'81px'}>
                                {loading ? <Box marginBottom={'311px'}>Loading...</Box> :
                                    coinHolding.map((coin) => (
                                        <Box key={coin.name} > <p>{coin.coinName}: {coin.balance}</p> </Box>
                                    ))}
                            </Box>
                        </div>

                        <Box>
                            <Box display={'flex'}>

                                {selectedCoinFrom ? (<Typography variant="h3"
                                    color={colors.grey[100]}
                                    marginBottom={"11px"}
                                    fontSize={"15px"}>from {selectedCoinFrom} <SwapHorizOutlinedIcon /></Typography>) : (undefined)}

                                {selectedCoinTo ? (
                                    <Typography variant="h3"
                                        color={colors.grey[100]}
                                        marginBottom={"11px"}
                                        fontSize={"15px"}>to
                                        &nbsp;{selectedCoinTo}
                                    </Typography>) : (undefined)}
                            </Box>

                            <Box display={'flex'}>

                                {selectedCoinFrom ? (<Box> <Typography variant="h3"
                                    color={colors.grey[100]}
                                    marginBottom={"11px"}
                                    fontSize={"15px"}>{selectedCoinFrom}
                                </Typography> <Typography variant="h3"
                                    color={colors.grey[100]}
                                    marginBottom={"11px"}
                                    fontSize={"15px"}>price&nbsp;${parseFloat(fromCoinPrice).toFixed(2)}
                                    </Typography> </Box>) : (undefined)}

                                {selectedCoinTo ? (
                                    <Box marginLeft={'10%'}>   <Typography variant="h3"
                                        color={colors.grey[100]}
                                        marginBottom={"11px"}
                                        fontSize={"15px"}>{selectedCoinTo}
                                    </Typography>
                                        <Typography variant="h3"
                                            color={colors.grey[100]}
                                            marginBottom={"11px"}
                                            fontSize={"15px"}>
                                            price&nbsp;${parseFloat(ToCoinPrice).toFixed(2)}
                                        </Typography>  </Box>) : (undefined)}
                            </Box>
                        </Box>

                        <form onSubmit={handleFormSubmit}>

                            <Typography variant="h3"
                                color={colors.grey[100]}
                                marginBottom={"11px"}
                                fontSize={"15px"}>Number of coin Exchanging from
                            </Typography>

                            <TextField
                                label="Num. of coin exch. From"
                                variant="outlined"
                                type="number"
                                name="amountChangingFrom"
                                value={NumOfCoin.amountChangingFrom}
                                onChange={handleSendDetails}
                                error={AmountError}
                                helperText={AmountError ? 'Enter a valid amount' : ''}
                            />
                            <br />
                            <br />
                            <Button type="submit" variant="contained" color="secondary" >Exchange</Button>
                        </form>
                    </Grid>

                    {/* To */}
                    <Grid style={{ width: '250px', height: '50%' }}
                        margin={"0 0 0 2%"}
                        borderRadius={"10px"}
                        padding={"8px"}
                        backgroundColor={colors.primary[400]}>
                        <Header text={" To"} />

                        {selectedCoinTo ? (
                            <Typography variant="h3"
                                color={colors.grey[100]}
                                marginBottom={"5px"}
                                fontSize={"15px"}>exchange to
                                &nbsp;{selectedCoinTo}
                            </Typography>) : (undefined)}
                        <Box>
                            <Box marginBottom={'1px'}>
                                <input
                                    type="text" placeholder="Search coin exchanging from"
                                    value={searchValueTo}
                                    onChange={(e) => setSearchValueTo(e.target.value)} />
                            </Box>
                            <Box>
                                <div style={{
                                    width: '150px',
                                    maxHeight: '121px',
                                    overflowY: 'scroll',
                                    scrollbarWidth: 'thin'
                                }} >
                                    <ul>
                                        {filteredCo.map((coin, index) => (
                                            <li style={{
                                                margin: '6px',
                                                cursor: 'pointer',
                                                backgroundColor: colors.grey[600],
                                                listStyle: 'none'
                                            }}
                                                key={index}
                                                onClick={() => handleCoinClickTo(coin.name)}
                                            >
                                                {coin.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Exchange;