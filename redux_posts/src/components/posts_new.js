import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  // field: contains some event handlers

  renderField(field) {
    // field.meta.error, field.meta.touched
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ''}`;

    return (
      <div className={className}>
        <label htmlFor="title">{field.label}</label>
        <input
          type="text"
          {...field.input}
          className="form-control"
        />

        <small className="text-help">{touched ? error : ''}</small>
      </div>
    )
  }

  onSubmit(values) {
    // this === component

    // should call an action creator: responsible for posting the post to the api
    this.props.createPost(values, () => {
      // callback to redirect after create post
      this.props.history.push('/');
    });

    /* network console
    OPTIONS: cross origin resource sharing, security feature
    */
  }

  render() {
    // handleSubmit is from reduxForm that is wired below
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>Add a new post</h3>
        {/* When validation is okay, it will call `onSubmit` as callback function */}
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
 
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
 
          <Field
            label="Post content"
            name="content"
            component={this.renderField}
          />

          <button type="submit" className="btn btn-primary submit-btn">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

// values: object that is entered to the form
function validate(values) {
  const errors = {};

  // Validate the inputs from `values`
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 character!";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }

  if (!values.content) {
    errors.content = "Enter some content please!";
  }

  return errors;
}

// state and validation
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew) // to wire up the action creator
);

/*
  reduxform:
  pristine: default, 
  touched: has selected before,
  invalid: having some errors
*/
