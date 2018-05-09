import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDestroy,
} from '../actions/category-actions.js';

import CategoryList from './category-list.jsx';
import CategoryForm from './category-form.jsx';

class Dashboard extends React.Component {
  render() {
    return <div>
      <h1>Manage Your Budget</h1>
      <h2>Create A Category:</h2>
      <CategoryForm name="create"></CategoryForm>
      <CategoryList></CategoryList>
    </div>
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: () => dispatch(categoryCreate()),
    categoryUpdate: values => dispatch(categoryUpdate(values)),
    categoryDestroy: id => dispatch(categoryDestroy(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);