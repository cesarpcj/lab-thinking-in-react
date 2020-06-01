import React, { Component } from 'react';
import './search.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      onStock: false,
    };
  }

  inputhandler = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  checkboxHandler = (event) => {
    this.setState({
      onStock: !this.state.onStock,
    });
  };

  submit = (event) => {
    event.preventDefault();
    this.props.getInputValue(this.state.inputValue, this.state.onStock);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            type="search"
            value={this.state.inputValue}
            onChange={this.inputhandler}
          />

          <div>
            <input
              id="onStock"
              name="inStock-checkbox"
              type="checkbox"
              onChange={this.checkboxHandler}
            />
            <label htmlFor="onStock">Only show products on stock</label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
