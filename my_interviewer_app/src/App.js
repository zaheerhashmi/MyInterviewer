import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function App() {

  var [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("page has rerendered");
    // make request from API
  }, [counter]);


  return (
    <div className="App">
      <form className = "search-form">
        <input className = "search-bar" type="text"/>
        <button className = "search-button" type="submit">
          Search
          </button>
      </form>
      <h1 onClick={() => setCounter(counter+1)}>
        {counter}
        </h1>
      <h2>subheader?</h2>
      <body>body?</body>
    </div>
  );
}

export default App;
