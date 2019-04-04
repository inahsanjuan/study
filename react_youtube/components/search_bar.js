import React, {Component} from 'react';

// Component = React.Component
class SearchBar extends Component {
  // being called when new instance is created
  // initializing states
  constructor(props) {
    console.log(props);
    super(props);

    this.state = { term: '' };
  }

  // should return jsx
  render() {
    return (
      <div className="search-bar form-group">
        <input 
          className="form-control"
          value={this.state.term} //controlled component
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Search..."
        />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
