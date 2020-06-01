import React from 'react';
import './App.css';
import data from './data.json';
import SearchInput from './component/searchInput/searchInput';
import ProductList from './component/productList/productList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [...data.data],
      query: '',
      onStock: false,
    };
  }

  getQueryValue = (value, onStock) => {
    this.setState({
      query: value,
      onStock,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="title">
          <h1>IronStore</h1>
        </header>
        <section className="search-input">
          <SearchInput getInputValue={this.getQueryValue}></SearchInput>
        </section>
        <section className="product-list">
          <ProductList
            query={this.state.query}
            onStock={this.state.onStock}
            data={this.state.data}
          ></ProductList>
        </section>
      </div>
    );
  }
}

export default App;
