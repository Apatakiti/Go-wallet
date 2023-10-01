import Button from "@mui/material/Button"
import { useSelector } from 'react-redux';

const Transactions = () => {

    const transactionHistory = useSelector((state) => state.data.transanctionHistory);

    return (
      <div>
         <Button variant="contained" color="primary"> Transactions</Button>
         
      <h2>TRANSACTION HISTORY</h2>
      <div>
      {transactionHistory.map((coinName) => (
        <div key={coinName.CoinName}>
          <p>{crypto.CoinName}</p>
          <p>{crypto.coinAddress}</p>
          <p>{crypto.Amount}</p>
          <p>{crypto.submissionTime}</p>
        </div>
      ))}
    </div>
    </div>
  
    )
}

export default Transactions;