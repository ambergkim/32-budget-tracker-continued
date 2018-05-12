import React from 'react';
import {connect} from 'react-redux';

import ExpenseItem from './expense-item.jsx';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllExpenses = this.displayAllExpenses.bind(this);
  }

  displayAllExpenses() {
    console.log('expense list form category id props', this.props.categoryId);
    console.log('expense list props expenses', this.props.expenses);
    return this.props.expenses.map((expense, i) => {
      if (this.props.categoryId === expense.categoryId) {
        return <ExpenseItem key={i} id={expense.id} categoryId={expense.categoryId} name={expense.name} amount={expense.amount}></ExpenseItem>
      }
    });
  }

  render() {
    return (
      <div>
        <ul>{this.displayAllExpenses()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses.expenses,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: val => dispatch(expenseCreate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);