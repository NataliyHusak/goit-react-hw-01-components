import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <div className={styles.bg}>
    <table className={styles["transaction-history"]}>
      <thead>
        <tr className={styles.thead_tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map(({id, type, amount, currency}) => (
          <tr className={styles.tbody_tr} key={id}>
            <td className={styles.type_td}>{type}</td>
            <td className={styles.amount_td}>{amount}</td>
            <td className={styles.currency_td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string
    })
  )
};

export default TransactionHistory;
