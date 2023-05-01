// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachList, deleteTransaction} = props

  const {title, amount, type, id} = eachList
  console.log({amount})
  const deleteHistory = () => {
    deleteTransaction(id)
  }
  return (
    <li className="header-container">
      <p className="header">{title}</p>

      <p className="header">{amount}</p>
      <div className="delete-container">
        <p className="header type">{type}</p>
        <button type="button" className="button" onClick={deleteHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete"
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
