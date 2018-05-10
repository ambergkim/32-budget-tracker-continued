import {combineReducers} from 'redux';

import categoryApp from './category-app.js';
import expenseApp from './expense-app.js';

export default combineReducers({
  category: categoryApp,
  // expense: expenseApp
});