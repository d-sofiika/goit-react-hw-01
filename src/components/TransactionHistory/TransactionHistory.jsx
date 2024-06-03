import css from "../TransactionHistory/transactionHistory.module.css";

const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <tr className={css.tline}>
    <td className={css.tdata}>{capitalizeFirstLetter(type)}</td>
    <td className={css.tdata}>{amount}</td>
    <td className={css.tdata}>{currency}</td>
  </tr>
);

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th className={css.theadText}>Type</th>
          <th className={css.theadText}>Amount</th>
          <th className={css.theadText}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {items.map((transaction) => (
          <TransactionHistoryItem
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
