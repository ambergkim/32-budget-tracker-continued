import React from 'react';
import {connect} from 'react-redux';

import ExpenseItem from './expense-item.jsx';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllExpenses = this.displayAllExpenses.bind(this);
  }

  displayAllExpenses() {
    console.log('this props', this.props);
    return this.props.expenses.map(expense => {
      return <ExpenseItem key={expense.id} id={expense.id} name={expense.name} budget={expense.budget} isEditing={expense.isEditing}></ExpenseItem>
    });
  }

  render() {
    return (
      <div>
        <h2>Current budget list:</h2>
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