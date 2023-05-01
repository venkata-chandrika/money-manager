import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    transactionLists: [],
  }

  inputTitle = event => {
    this.setState({title: event.target.value})
  }

  inputAmount = event => {
    this.setState({amount: event.target.value})
  }

  selectedOption = event => {
    this.setState({type: event.target.value})
  }

  deleteTransaction = id => {
    // console.log(id)
    const {transactionLists} = this.state
    const filteredTransaction = transactionLists.filter(
      eachList => eachList.id !== id,
    )
    this.setState({transactionLists: filteredTransaction})
  }

  onAddButton = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newTransaction = {
      id: v4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionLists: [...prevState.transactionLists, newTransaction],
      title: '',
      amount: '',
    }))
  }

  incomeAmount = () => {
    let income = 0
    const {transactionLists} = this.state
    transactionLists.forEach(each => {
      if (each.type === 'Income') {
        income += parseInt(each.amount)
      }
    })
    return income
  }

  expenseAmount = () => {
    let expenses = 0
    const {transactionLists} = this.state
    transactionLists.forEach(eachList => {
      if (eachList.type === 'Expenses') {
        expenses += parseInt(eachList.amount)
      }
    })
    return expenses
  }

  render() {
    const {transactionLists} = this.state

    return (
      <div className="app-container">
        <div className="money-container">
          <div className="top-title-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="sub-heading">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            incomeAmount={this.incomeAmount}
            expenseAmount={this.expenseAmount}
          />

          <div className="bottom-container">
            <div className="transaction-container">
              <form onSubmit={this.onAddButton} className="form">
                <h1 className="transaction-title">Add Transaction</h1>
                <label htmlFor="inputTitle" className="label">
                  TITLE
                </label>
                <br />
                <input
                  id="inputTitle"
                  type="text"
                  placeholder="TITLE"
                  className="input"
                  onChange={this.inputTitle}
                />
                <label htmlFor="inputAmount" className="label">
                  AMOUNT
                </label>
                <br />
                <input
                  id="inputAmount"
                  type="text"
                  placeholder="AMOUNT"
                  className="input"
                  onChange={this.inputAmount}
                />
                <label htmlFor="inputType" className="label">
                  TYPE
                </label>
                <br />
                <select className="input" onChange={this.selectedOption}>
                  {transactionTypeOptions.map(each => (
                    <option
                      key={each.optionId}
                      value={each.displayText}
                      defaultValue
                    >
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="btn"
                  onClick={this.onAddButton}
                >
                  Add
                </button>
              </form>
            </div>
            <div className="transaction-history-container">
              <div className="container">
                <h1 className="history-title">History</h1>
                <div className="header-container">
                  <p className="header">Title</p>
                  <p className="header">Amount</p>
                  <p className="header">Type</p>
                </div>
                <ul className="history-container">
                  {transactionLists.map(eachList => (
                    <TransactionItem
                      eachList={eachList}
                      deleteTransaction={this.deleteTransaction}
                      key={eachList.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
