import React, { Component } from 'react';

import './App.css';
import SearchResults from './containers/SearchResults/SearchResults';
import Header from './containers/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchResults />
      </div>
    );
  }
}

export default App;
