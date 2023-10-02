import { useSelector } from 'react-redux';

const Transactions = () => {
  const transactionHistory = useSelector((state) => state.data.transanctionHistory)

     return (
      <div>
        <h2>TRANSACTION HISTORY</h2>
        <div>

          {transactionHistory.map((details, index) => (
            <div key={index}>
             {details.Amount > 0 ? 
             <div>
                  <span>
                    {Math.abs(details.Amount)}&nbsp;
                    {details.CoinName}&nbsp;
                    recieved from&nbsp;
                    #{details.coinAddress}
                  </span>
                  <p>Date :&nbsp;{details.submissionTime} </p>
             </div>
             :
             <div>
                  <span>
                    {Math.abs(details.Amount)}&nbsp;
                    {details.CoinName}&nbsp; 
                    sent to&nbsp;
                    #{details.coinAddress}
                  </span>
                  <p>{details.submissionTime} </p>
             </div>
             }
            </div>
          ))}
        </div>
    </div>
    )
}

export default Transactions;