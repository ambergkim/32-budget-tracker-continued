import React from 'react';
import {connect} from 'react-redux';
import {
  expenseCreate,
  expenseUpdate,
  expenseDestroy
} from '../actions/expense-actions.js';

import uuidv1 from 'uuid/v1';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      amount: 0,
      timestamp: Date.now(),
      categoryId: this.props.categoryId,
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    let newState = {
      name: event.target.value
    }
    this.setState(newState);
  }

  handleAmountChange(event) {
    let newState = {
      amount: event.target.value
    }
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state at expense submit', this.state);
    let submitFormName = this.props.name;
    if (this.props.name === 'create') {
      this.props.expenseCreate(this.state);
    } else if (this.props.name === 'update') {
      let newValue = Object.assign(this.state, {isEditing: false, id: this.props.id});
      this.props.expenseUpdate(this.state);
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleNameChange} type="text" placeholder="expense name" required="true"/>
        <input onChange={this.handleAmountChange} name="amount" type="text" placeholder="amount amount" required="true"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses.expenses
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: val => dispatch(expenseCreate(val)),
    expenseUpdate: val => dispatch(expenseUpdate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);