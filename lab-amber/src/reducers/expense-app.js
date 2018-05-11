import {
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DESTROY,
} from '../actions/expense-actions.js';
import uuidv1 from 'uuid/v1';

const initialState = {
  expenses: [],
}

export default function expenseReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let currentExpenses;
  let expenseIndex;

  console.log('action type in expense app reducer', action.type);

  switch(action.type) {
    case EXPENSE_CREATE:
      console.log('expense reducer create fired.');
      console.log('state expenses', state.expenses);
      currentExpenses = state.expenses.slice();
      let newExpense = Object.assign({}, {id: uuidv1(), isEditing: false}, action.value);
      currentExpenses.push(newExpense);
      return Object.assign(newState, state, {expenses: currentExpenses});
    case EXPENSE_UPDATE:
      console.log('expense reducer update fired.');
      currentExpenses = state.expenses.slice();
      let expenseToUpdate = currentExpenses.find(expense => {
        return expense.id === action.values.id;
       });
      expenseIndex = currentExpenses.indexOf(expenseToUpdate);
      currentExpenses[expenseIndex].isEditing = !currentExpenses[expenseIndex].isEditing;
      if (action.values.name) {
        currentExpenses[expenseIndex].name = action.values.name;
      }
      if (action.values.budget) {
        currentExpenses[expenseIndex].budget = action.values.budget;
      }
      return Object.assign(newState, state, {expenses: currentExpenses});
    case EXPENSE_DESTROY:
      console.log('expense reducer destroy fired.');
      currentExpenses = state.expenses.slice();
      let expenseToRemove = currentExpenses.find(expense => {
        return expense.id === action.id;
      });
      expenseIndex = currentExpenses.indexOf(expenseToRemove);
      currentExpenses.splice(expenseIndex, 1);
      return Object.assign(newState, state, {expenses: currentExpenses});
    default: return newState;
  }
}