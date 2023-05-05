// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expenseAmount, totalAmount} = props

  console.log(incomeAmount, expenseAmount, totalAmount)
  return (
    <div className="money-details-container">
      <div className="img-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="balance-cont">
          <p className="balance">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {totalAmount}
          </p>
        </div>
      </div>
      <div className="img-income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="income-cont">
          <p className="balance">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="img-expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="expenses-cont">
          <p className="balance">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expenseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
