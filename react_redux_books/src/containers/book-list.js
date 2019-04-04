import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="col-sm-4">
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
};

function mapStateToProps(state) {
  // return value show up as props in BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  //  When selectBook is called, the result will be passed to all reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);

  // return value show up as props in BookList
}

// promote BookList from a component to container 
// container should know this "dispatch" method (selectBook).
// available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
