import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          {...field.input} //object
          className="form-control"
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>New post</h3>
        <form>
          <Field
            name="title" 
            component={this.rendereField}
          />
          <Field
            name="tags" 
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm' //name should be unique
})(PostsNew);