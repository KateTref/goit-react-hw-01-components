import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({items})=>{
return(
    <table className={css.transactionHistory}>
  <thead className={css.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(({type, amount, currency, id})=>(
    <tr className={css.stroke} key = {id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ))}
    </tbody>
  </table>
)}

TransactionHistory.propTypes = {
    type: PropTypes.oneOf(['invoice', 'payment', 'deposit', 'withdrawal']).isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionHistory;