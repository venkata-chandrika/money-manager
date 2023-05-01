// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expensesAmount} = props
  const totalBalance = incomeAmount - expensesAmount
  console.log(incomeAmount, expensesAmount, totalBalance)
  return (
    <div className="money-details-container">
      <div className="img-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
          data-testid="balanceAmount"
        />
        <div className="balance-cont">
          <p className="balance">Your Balance</p>
          <p className="amount">Rs {totalBalance}</p>
        </div>
      </div>
      <div className="img-income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
          data-testid="incomeAmount"
        />
        <div className="income-cont">
          <p className="balance">Your Income</p>
          <p className="amount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="img-expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
          data-testid="expensesAmount"
        />
        <div className="expenses-cont">
          <p className="balance">Your Expenses</p>
          <p className="amount">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
