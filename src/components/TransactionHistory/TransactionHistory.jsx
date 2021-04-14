import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
      <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
<tbody>
    {items.map((item) => 
        <tr key={item.id}>
             <td className={styles.item}>{item.type}</td>
             <td className={styles.item}>{item.amount}</td>
             <td className={styles.item}>{item.currency}</td>
        </tr>
    )}   
</tbody>
</table>
)}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
}

export default TransactionHistory;