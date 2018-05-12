import React from 'react';
import {connect} from 'react-redux';

import CategoryItem from './category-item.jsx';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllCategories = this.displayAllCategories.bind(this);
  }

  displayAllCategories() {
    console.log('this props', this.props);
    return this.props.categories.map(category => {
      return <CategoryItem key={category.id} id={category.id} name={category.name} budget={category.budget} isEditing={category.isEditing}></CategoryItem>
    });
  }

  render() {
    return (
      <div>
        <h2>Current budget list:</h2>
        <ol>{this.displayAllCategories()}</ol>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: val => dispatch(categoryCreate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);